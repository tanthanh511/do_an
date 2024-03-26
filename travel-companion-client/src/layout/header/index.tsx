import styles from "./styles.module.scss";
import { Menus } from "./header.constants";
import { Link } from "react-router-dom";
import { ROUTE_NAME } from "../../helpers/Route";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../components/language/languageSelector";
export interface Props {}

export default function Header(props: Props) {
  const { t } = useTranslation();
  return (
    // <BrowserRouter>
    <div className={styles.main}>
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
        </div>
       
        <div className={styles.account_user_header}>
        <div className={styles.language}>
          <LanguageSelector />
        </div>
          <div className={styles.login_header}>
            <Link to={ROUTE_NAME.LOGIN}>{t("login")}</Link>
          </div>
          <div className={styles.register_header}>
            <Link to={ROUTE_NAME.REGISTER}>{t("register")}</Link>
          </div>
        </div>
      </div>
    </div>
    // {/* </BrowserRouter> */}
  );
}
