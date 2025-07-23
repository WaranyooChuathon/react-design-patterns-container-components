interface Product {
    name: string; 
    price: string;
    description: string;
    rating: number;
}

interface ProductInfoProps {
    product: Product;
}



export const ProductInfo = ({ product }:ProductInfoProps) => {
	const { name, price, description, rating } = product;

	return (
		<>
		<h3>{name}</h3>
		<p>{price}</p>
		<h3>Description:</h3>
		<p>{description}</p>
		<p>Average Rating: {rating}</p>
		</>
	);
}