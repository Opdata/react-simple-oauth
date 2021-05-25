import { useContext } from 'react';
import { myContext } from '../Context';
import IUser from '../../maintypes';

export default function Homepage() {
  const context = useContext(myContext) as IUser;

  return (
    <div>
      {context ? (
        <h1>Welcome Back {context.username}</h1>
      ) : (
        <h1>Welcome To My Site</h1>
      )}
    </div>
  );
}
