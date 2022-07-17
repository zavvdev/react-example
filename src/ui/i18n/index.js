import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { APP_DEFAULT_LANGUAGE, APP_LANGUAGES } from "core/config/i18n";
import { resources } from "ui/i18n/resources";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    let appLanguage = APP_DEFAULT_LANGUAGE;

    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const storeLang = localStorage.getItem("i18nextLng");

    const isPresent = Object.values(APP_LANGUAGES).find(
      (item) => item === localeShort,
    );

    if (storeLang) {
      appLanguage = storeLang;
    } else if (isPresent) {
      appLanguage = localeShort;
    }

    return appLanguage;
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: APP_DEFAULT_LANGUAGE,
    react: {
      useSuspense: true,
    },
    detection: {
      order: ["languageDetector", "localStorage"],
    },
  });

export { i18n };
