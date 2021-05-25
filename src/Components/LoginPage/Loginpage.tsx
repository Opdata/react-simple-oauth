import googleIcon from '../../Assets/googleIcon.png';
import githubIcon from '../../Assets/githubIcon.png';
import styles from './Loginpage.module.css';

export default function Loginpage() {
  const googleLogin = () => {
    window.open(
      'https://react-simple-oauth-backend.herokuapp.com/auth/google',
      '_self'
    );
  };

  const githubLogin = () => {
    window.open(
      'https://react-simple-oauth-backend.herokuapp.com/auth/github',
      '_self'
    );
  };

  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
      <div className={styles.loginForm}>
        <div className={styles.googleContainer} onClick={googleLogin}>
          <img src={googleIcon} alt="google Icon" />
          <p>Login With Google</p>
        </div>

        <div
          className={`${styles.googleContainer} ${styles.githubContainer}`}
          onClick={githubLogin}
        >
          <img src={githubIcon} alt="github Icon" />
          <p>Login With Github</p>
        </div>
      </div>
    </div>
  );
}
