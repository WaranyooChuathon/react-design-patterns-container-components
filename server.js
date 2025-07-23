import express from 'express'
import cors from 'cors'
import { currentUser, users, products } from './dataUser.js';


const app = express()

app.use(cors())
app.use(express.json())


app.get('/current-user', (req, res) => {
    res.json(currentUser)
});

app.get('users/:id', (req, res) => {
    const {id} = req.params
    res.json(users.find(user => user.name === id));
});

app.post('users/:id', (req, res) => {
	const { id } = req.params;
	const { user: updatedUser } = req.body;

	users = users.map(user => user.id === id ? updatedUser : user);

	res.json(users.find(user => user.id === id));
})

app.get('/users', (req, res) => {
	res.json(users);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;

	res.json(products.find(product => product.id === id));
});

app.get('/products', (req, res) => {
	res.json(products);
});

app.listen(8080, () => {
	console.log('Server is listening on port 8080');
});