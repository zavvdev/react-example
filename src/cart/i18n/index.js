import { APP_LANGUAGES, i18n } from "cart/gateway/input";
import en from "cart/i18n/en.json";

export const CART_I18N_NAMESPACE = "cart";

i18n.addResourceBundle(APP_LANGUAGES.en, CART_I18N_NAMESPACE, en);
