import { ROUTE_NAME } from "../../helpers/Route";
import styles from "./styles.module.scss";
import register from "../../assets/register.svg";
import { useEffect, useState } from "react";
import hidden from "../../assets/loginAndRegister/eye.svg";
import eyeSlash from "../../assets/loginAndRegister/eye-slash.svg";
import { ToastContainer, toast } from "react-toastify";
import { loginApi } from "../../services/user_service";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import ReactLoading from "react-loading";
//import ReactPaginate from "react-paginate";

export default function Login() {
  const [email, setEmail] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // // phân trang
  // const [userName, setUserName] = useState("");
  // const [listUser, setListUser] = useState([]);
  // const [totalUser, setTotalUser] = useState(0);
  // useEffect(() => {
  //   getUsers(1);
  // }, []);

  // const getUsers = async (page:number) => {
  //   const res = await fetchAllUser(page);
  //   if (res && res.data) {
  //     setListUser(res.data);
  //     setTotalUser(res.total);
  //     setTotalPages(res.total_pages)
  //   }
  // };
  // //console.log(listUser);
  // const handlePageClick = (e:any) => {
  //   //console.log( e);
  //   //const nextPage = e.selected+1
  //   getUsers(e.selected+1)
  // };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is requiered!");
      return;
    }
    setLoading(true);
    const res = await loginApi(email, password);

    if (res && res.token) {
      localStorage.setItem("token", res.token);
      navigate("/");
    } else {
      if (res && res.response?.status === 400) {
        toast.error(res.response?.data.error);
      }
    }
    setLoading(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* <ToastContainer /> */}
        <img className={styles.img_login} src={register} alt="" />
        <div className={styles.login_form}>
          <h2 className={styles.title}>Welcome to Travel Companion</h2>

          <div className={styles.username}>
            <label htmlFor="username">Username (eve.holt@reqres.in)</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              required
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">Password</label>
            <div className={styles.box_password}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword === true ? "text" : "password"}
                id="password"
                required
              />

              <img
                className={styles.eye}
                src={showPassword === false ? hidden : eyeSlash}
                alt=""
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <div className={styles.btn_login}>
            <button
              className={email && password ? styles.submit : styles.no_submit}
              disabled={email && password ? false : true}
              // type="submit"
              onClick={handleLogin}
            >
              Login
              {loading && (
                <ReactLoading
                  className={styles.loading_spin}
                  type={"spin"}
                  color={"#000"}
                  height={24}
                  width={24}
                />
              )}
            </button>
          </div>

          <p>
            Not one Travel Companion yet?
            <a href={ROUTE_NAME.REGISTER}>Rigister Here!</a>
          </p>
          <h2>We'll never share your email with anyone else.</h2>

          <div></div>
        </div>
      </div>
      {/*
      Phân trang 
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
}
