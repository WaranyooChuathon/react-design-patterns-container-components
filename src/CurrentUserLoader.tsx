import React, { useState, useEffect,} from 'react';
import axios from 'axios';
import type {ReactElement} from 'react';

type User = {    
  name: string; 
  age: number;    
  hairColor: string;
  hobbies: string[];
};

interface CurrentUserLoaderProps {
  children: ReactElement<{ user: User }> | ReactElement<{ user: User }>[];
}

export const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
  const [user, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8080/current-user');
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
