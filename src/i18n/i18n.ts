import * as SHARED_TRANSLATIONS from "app/shared/locales";
import { default as i18n, default as i18next } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {},
    fallbackLng: "en",
    debug: false,
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

i18next.addResourceBundle(
  "en",
  SHARED_TRANSLATIONS.SHARED_NAMESPACE,
  SHARED_TRANSLATIONS.EN
);

export default i18n;
