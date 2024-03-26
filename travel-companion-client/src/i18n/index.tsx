import i18n from "i18next";
import LangugeDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LangugeDetector)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: require("./locales/en/translation.json")
      },
      vi: {
        translation: require("./locales/vi/translation.json")
      }
    }
  });
