import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { I18N_CONFIG } from "app/i18n/config";
import { localStorageService } from "app/services/LocalStorageService";
import { resources } from "app/i18n/resources";

const languageDetector = new LanguageDetector();

languageDetector.addDetector({
  name: "languageDetector",
  lookup() {
    let appLanguage = I18N_CONFIG.appDefaultLanguage;

    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const storeLang = localStorageService.get("i18nextLng");

    const isPresent = Object.values(I18N_CONFIG.appLanguages).find(
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
    fallbackLng: I18N_CONFIG.appDefaultLanguage,
    react: {
      useSuspense: true,
    },
    detection: {
      order: ["languageDetector", "localStorage"],
    },
  });
