import styles from "./styles.module.scss";
import { Menus } from "./header.constants";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../../helpers/Route";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/language/languageSelector";
import { ToastContainer, toast } from "react-toastify";
export interface Props {}

export default function Header(props: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
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
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.href}>{menu.name}</Link>
            </li>
          ))}
          <li className={styles.dropdown_nav}>
            <a className={styles.dropbtn}>Admin</a>
            <ul className={styles.sub_menu}>
              <li>
                <a href="">User</a>
              </li>
              <li>
                <a href="">Place</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </li>
        </div>

        <div className={styles.account_user_header}>
          <div className={styles.language}>
            <LanguageSelector />
          </div>
          <li className={styles.dropdown_setting}>
            <a >Setting</a>
            <ul className={styles.sub_menu_setting}>
              <li>
              <Link to={ROUTE_NAME.LOGIN}>{t("login")}</Link>
                {/* <div className={styles.login_header}>
                 
                </div> */}
              </li>
              <li>
              <Link to={ROUTE_NAME.LOGIN} onClick={handleLogout}>
                    {t("logout")}
                  </Link>
                {/* <div className={styles.register_header}>
                  
                </div> */}
              </li>
              <li>
              <Link to={ROUTE_NAME.REGISTER}>{t("register")}</Link>

                {/* <div className={styles.register_header}>
                </div> */}
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
    // {/* </BrowserRouter> */}
  );
}
