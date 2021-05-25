import { useContext } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../Context';
import IUser from '../../maintypes';

export default function Navbar() {
  const userObj = useContext(myContext) as IUser;

  const logout = () => {
    axios
      .get('http://localhost:4000/auth/logout', { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data === 'done') {
          window.location.href = '/';
        }
      });
  };

  return (
    <div className={styles.navBarContainer}>
      <ul className={styles.navBarul}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {userObj ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
