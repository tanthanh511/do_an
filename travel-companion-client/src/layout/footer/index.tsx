import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import fb from "../../assets/icon_network_social/facebook.svg";
import yb from "../../assets/icon_network_social/youtube.svg";
import ig from "../../assets/icon_network_social/ig.svg";
import tw from "../../assets/icon_network_social/tw.svg";
import email from "../../assets/icon_network_social/email.svg";
import phone from "../../assets/icon_network_social/phone.svg";
import location from "../../assets/icon_network_social/location.svg";
import { useTranslation } from "react-i18next";

type Props = {};
export default function Footer(props: Props) {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.network_society_footer}>
          <div className={styles.box_footer}>
            <div className={styles.logo_box}>
              <div className={styles.logo_footer}>
                <img src="../../assets/logo_travel.svg" alt="" />
              </div>
              <div className={styles.name_logo_footer}>
                <div>
                  <p>Travel</p>
                </div>
                <div>
                  <p>Companion</p>
                </div>
              </div>
            </div>
            <div className={styles.contact_network_society}>
              <Link
                to="https://www.facebook.com/profile.php?id=100013667890742"
                className={styles.fb}
              >
                <img src={fb} alt="facebook" />
              </Link>
              <Link to="duong_dan_den_trang_web" className={styles.youtube}>
                <img src={yb} alt="youtube" />
              </Link>
              <Link to="duong_dan_den_trang_web" className={styles.ig}>
                <img src={ig} alt="instagram" />
              </Link>
              <Link to="duong_dan_den_trang_web" className={styles.tw}>
                <img src={tw} alt="twiter" />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.discover_footer}>
          <div className={styles.discover}>{t("discover")} </div>

          <Link to={"./"}>{t("place")}</Link>
          <Link to={"./"}>{t("blog")}</Link>
          <Link to={"./"}>{t("contact")}</Link>
        </div>

        <div className={styles.quick_link_footer}>
          <div className={styles.quick_link}>{t("quicksLink")}</div>

          <Link to={"./"}>{t("login")}</Link>
          <Link to={"./"}>{t("register")}</Link>
        </div>

        <div className={styles.contact_footer}>
          <div className={styles.contact}>{t("contact")}</div>
          <div className={styles.about_me}>
            <img src={email} alt="email" />
            <label htmlFor="">Email: huynhtanthanh@gmail.com</label>
          </div>
          <div className={styles.about_me}>
            <img src={phone} alt="phone number" />
            <label htmlFor="">{t("phone")}: 111.111.111</label>
          </div>
          <div className={styles.about_me}>
            <img src={location} alt="address" />
            <label htmlFor="">{t("address")}: {t("DLCity")}</label>
          </div>
        </div>
      </div>
    </div>
  );
}
