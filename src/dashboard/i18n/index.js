import { i18n } from "app/i18n";
import { APP_LANGUAGES } from "app/i18n/config";
import en from "dashboard/i18n/en.json";

export const DASHBOARD_I18N_NAMESPACE = "dashboard";

i18n.addResourceBundle(APP_LANGUAGES.en, DASHBOARD_I18N_NAMESPACE, en);
