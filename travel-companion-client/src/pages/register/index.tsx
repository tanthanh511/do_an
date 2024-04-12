import styles from "./styles.module.scss";
import register from "../../assets/register.svg";
import { useEffect, useRef, useState } from "react";

type Props = {};

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // useRef. current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = USER_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidName(result);
    const match = pwd === matchPwd;
    setValidPwd(match);
  }, [pwd, matchPwd]);

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
                <input
                  type="text"
                  id="username"
                  required
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  required
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(e) => e.target.value}
                />
              </div>
              <div className={styles.bio}>
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  id="bio"
                  required
                  onChange={(e) => e.target.value}
                />
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
