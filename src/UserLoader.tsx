import React, { useState, useEffect,} from 'react';
import axios from 'axios';
import type {ReactElement} from 'react';

type User = {    
  id: string;
  name: string; 
  age: number;    
  hairColor: string;
  hobbies: string[];
};

interface CurrentUserLoaderProps {
  children: ReactElement<{ user: User }> | ReactElement<{ user: User }>[];
  userId: string;
}

export const UserLoader = ({ children ,userId}: CurrentUserLoaderProps) => {
  const [user, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`'http://localhost:8080/user/${userId}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <>
      {user &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, { user })
        )}
    </>
  );
};
