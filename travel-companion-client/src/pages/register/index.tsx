import styles from "./styles.module.scss";
import register from "../../assets/register.svg";
type Props = {};
export default function Register(props: Props) {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <img className={styles.img_register} src={register} alt="" />
          <div className={styles.register_form}>
            <h2 className={styles.title}>Welcome to Travel Companion</h2>
            <form>
              <div className={styles.username}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" required />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">email</label>
                <input type="text" id="email" required />
              </div>
              <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <div className={styles.bio}>
                <label htmlFor="bio">bio</label>
                <input type="text" id="bio" required />
              </div>
              <div className={styles.btn_register}>
                <button className={styles.submit} type="submit">
                  register
                </button>
              </div>
            </form>

            <h2>We'll never share your email with anyone else.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
