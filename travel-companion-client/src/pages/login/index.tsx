import { ROUTE_NAME } from "../../helpers/Route";
import styles from "./styles.module.scss";
import login from "../../assets/login.svg";
type Props = {};
export default function Login(props: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <img className={styles.img_login} src={login} alt="" />
        <div className={styles.login_form}>
          <h2 className={styles.title}>Welcome to Travel Companion</h2>
          <form>
            <div className={styles.username}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className= {styles.btn_login}>
              <button className={styles.submit} type="submit">
                Login
              </button>
            </div>
          </form>
          <p>
            Not one Travel Companion yet?{" "}
            <a href={ROUTE_NAME.REGISTER}>Rigister Here!</a>
          </p>
          <h2>We'll never share your email with anyone else.</h2>
        </div>
      </div>
    </div>
  );
}
