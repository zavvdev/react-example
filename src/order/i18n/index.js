import { APP_LANGUAGES, i18n } from "order/gateway/input";
import en from "order/i18n/en.json";

export const ORDER_I18N_NAMESPACE = "order";

i18n.addResourceBundle(APP_LANGUAGES.en, ORDER_I18N_NAMESPACE, en);
