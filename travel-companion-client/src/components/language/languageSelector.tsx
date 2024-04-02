import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";
import vn from "../../assets/language/viet-nam.png";
import en from "../../assets/language/my.png";

const languages = [
  { code: "en", lang: en },
  { code: "vi", lang: vn },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.btn_container}>
      {languages.map((lng) => {
        return (
          <button
            type="submit"
            className={lng.code === i18n.language ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <img src={lng.lang} alt="" className={styles.icon_language} />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
