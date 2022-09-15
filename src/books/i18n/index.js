import { APP_LANGUAGES, i18n } from "books/gateway/input";
import en from "books/i18n/en.json";

export const BOOKS_I18N_NAMESPACE = "books";

i18n.addResourceBundle(APP_LANGUAGES.en, BOOKS_I18N_NAMESPACE, en);
