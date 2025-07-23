import { useState, useEffect} from 'react';
import axios from 'axios';
import { UserInfo } from './UserInfo'; // Assuming userInfo is a component that displays user information


type User = {    
    name: string; 
    age: number;    
    hairColor: string;
    hobbies: string[];
}

export const CurrentUserInfo = ({ }) => {
    const [user, setUserInfo] = useState<User | null>(null);
    

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8080/current-user');
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }
        fetchUserInfo();
    }, []);

    return (
    
            user && <UserInfo user = {user}/>
       
    );
}   