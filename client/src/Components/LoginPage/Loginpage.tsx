import googleIcon from '../../Assets/googleIcon.png';
import styles from './Loginpage.module.css';
export default function Loginpage() {
  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
      <div className={styles.loginForm}>
        <div className={styles.googleContainer}>
          <img src={googleIcon} alt="google Icon" />
          <p>Login With Google</p>
        </div>
      </div>
    </div>
  );
}
