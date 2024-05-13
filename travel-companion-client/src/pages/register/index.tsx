import styles from "./styles.module.scss";
import register from "../../assets/register.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerApi } from "../../services/user_service";

type Props = {};

// const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  // const [pwd, setPwd] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  // const [matchPwd, setMatchPwd] = useState("");
  // const [validMatch, setValidMatch] = useState(false);
  // const [matchFocus, setMatchFocus] = useState(false);

  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   // useRef. current.focus();
  // }, []);

  // useEffect(() => {
  //   const result = USER_REGEX.test(user);

  //   setValidName(result);
  // }, [user]);

  // useEffect(() => {
  //   const result = USER_REGEX.test(pwd);

  //   setValidName(result);
  //   const match = pwd === matchPwd;
  //   setValidPwd(match);
  // }, [pwd, matchPwd]);

  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const isCheckValidate = () => {
    let regx = /\S+@\S+\.\S+/;
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    if (!regx.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!username) {
      toast.error("Name is required");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };
  const handleRegister = () => {
    let check = isCheckValidate();
    if (check === true) {
      registerApi(email, username, password, bio);
    }
  };

  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <img className={styles.img_register} src={register} alt="" />
          <div className={styles.register_form}>
            <h2 className={styles.title}>Welcome to Travel Companion</h2>
            <form>
              <div className={styles.email}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.username}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  required
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.bio}>
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  id="bio"
                  value={bio}
                  required
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className={styles.btn_register}>
                <button
                  className={styles.submit}
                  //type="submit"
                  onClick={handleRegister}
                >
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
