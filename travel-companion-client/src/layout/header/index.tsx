import styles from "./styles.module.scss";
import { Menus } from "./header.constants";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../../helpers/Route";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/language/languageSelector";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../context/user-context";
import { useContext } from "react";
export interface Props {}

export default function Header(props: Props) {
  const { t } = useTranslation();
  const { logout, user } = useContext(UserContext)!;

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("logout success");
  };
  return (
    // <BrowserRouter>
    <div className={styles.main}>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.logo_box_header}>
          <div className={styles.logo_travel_header}>
            <img src="../../assets/logo_travel.svg" alt="" />
          </div>
          <div className={styles.name_logo_header}>
            <div className={styles.text_travel}>
              <p>Travel</p>
            </div>
            <div className={styles.text_companion}>
              <p>Companion</p>
            </div>
          </div>
        </div>

        <div className={styles.navbar_header}>
          {/* <li>
            <Link to={ROUTE_NAME.HOME}>{t("home")}</Link>
          </li>
          <li>
            <Link to={ROUTE_NAME.PLACE}>{t("place")}</Link>
          </li>
          <li>
            <Link to={ROUTE_NAME.BLOG}>{t("blog")}</Link>
          </li>
          <li>
            <Link to={ROUTE_NAME.CONTACT}>{t("contact")}</Link>
          </li> */}
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.href}>{t(menu.name)}</Link>
            </li>
          ))}
          {user && user.auth === true ? (
            <>
              <li className={styles.dropdown_nav}>
                <a className={styles.dropbtn}>Admin</a>
                <ul className={styles.sub_menu}>
                  <li>
                    <Link to={ROUTE_NAME.BLOGADMIN}>Blog</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_NAME.USERADMIN}>User</Link>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              </li>
            </>
          ) : (
            ""
          )}
        </div>

        <div className={styles.account_user_header}>
          <div className={styles.language}>
            <LanguageSelector />
          </div>
          <li className={styles.dropdown_setting}>
            <a>{t("setting")}</a>
            <ul className={styles.sub_menu_setting}>
              {user && user.auth === true ? (
                <div>
                  <li>{user.email}</li>
                  <li>
                    <Link to={ROUTE_NAME.HOME} onClick={handleLogout}>
                      {t("logout")}
                    </Link>
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <Link to={ROUTE_NAME.LOGIN}>{t("login")}</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_NAME.REGISTER}>{t("register")}</Link>
                  </li>
                </div>
              )}
            </ul>
          </li>
        </div>
      </div>
    </div>
    // {/* </BrowserRouter> */}
  );
}
