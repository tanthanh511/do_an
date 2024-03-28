import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "EN" },
  { code: "vi", lang: "VN" },
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
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
