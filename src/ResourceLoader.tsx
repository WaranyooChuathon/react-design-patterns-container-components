import React, { useState, useEffect } from "react";
import axios from "axios";
import type { ReactElement } from "react";

type User = {
  id: string;
  name: string;
  age: number;
  hairColor: string;
  hobbies: string[];
};

interface CurrentUserLoaderProps {
  children: ReactElement<{ user: User }> | ReactElement<{ user: User }>[];
  resourceUrl: string;
  resourceName: string;
}

export const ResourceLoader = ({
  children,
  resourceUrl,
  resourceName,
}: CurrentUserLoaderProps) => {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(resourceUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <>
      {data &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, { [resourceName]: data })
        )}
    </>
  );
};
