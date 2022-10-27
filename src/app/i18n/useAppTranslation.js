import { useTranslation } from "react-i18next";
import { appI18n } from "app/i18n";
import { formValidationKeys } from "app/i18n/formValidationKeys";

export function useAppTranslation() {
  return {
    ...useTranslation(appI18n.namespace),
    formValidationKeys,
  };
}
