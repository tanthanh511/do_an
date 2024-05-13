import styles from "./styles.module.scss";
import banner2 from "../../assets/banner2.svg";
import { useTranslation } from "react-i18next";
export default function Subscribe() {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box_subscriber}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>{t("subscribe")}</h2>
            </div>

            <div className={styles.ip_btn_subscriber}>
              <input className={styles.ip_subscriber} type="text" />
              <button className={styles.btn_subscriber}>{t("sub")}</button>
            </div>
          </div>
        </div>

        <div className={styles.img}>  
          <img src={banner2} alt="" />
        </div>
      </div>
    </div>
  );
}
