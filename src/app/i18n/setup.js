import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { appI18n } from "app/i18n";
import { localStorageService } from "app/services/LocalStorageService";
import { resources } from "app/i18n/resources";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    let appLanguage = appI18n.appDefaultLanguage;

    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const storeLang = localStorageService.get("i18nextLng");

    const isPresent = Object.values(appI18n.appLanguages).find(
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
    fallbackLng: appI18n.appDefaultLanguage,
    react: {
      useSuspense: true,
    },
    detection: {
      order: ["languageDetector", "localStorage"],
    },
  });
