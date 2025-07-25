interface User {
    name: string; 
    age: number;
    hairColor: string;
    hobbies: string[];
}

interface UserInfoProps {
    user: User;
}   


export const UserInfo = ({ user }:UserInfoProps) => {
  const { name, age,hairColor, hobbies  } = user;

  return (
    <>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
    </>
  );
}   