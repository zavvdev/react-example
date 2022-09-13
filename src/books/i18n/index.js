import { i18n } from "app/i18n";
import { APP_LANGUAGES } from "app/i18n/config";
import en from "books/i18n/en.json";

export const BOOKS_I18N_NAMESPACE = "books";

i18n.addResourceBundle(APP_LANGUAGES.en, BOOKS_I18N_NAMESPACE, en);
