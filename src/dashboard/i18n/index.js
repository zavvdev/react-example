import { APP_LANGUAGES, i18n } from "dashboard/gateway/input";
import en from "dashboard/i18n/en.json";

export const DASHBOARD_I18N_NAMESPACE = "dashboard";

i18n.addResourceBundle(APP_LANGUAGES.en, DASHBOARD_I18N_NAMESPACE, en);
