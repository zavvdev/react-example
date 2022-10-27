import { useTranslation } from "react-i18next";
import { cartI18n } from "cart/i18n";

export function useCartTranslation() {
  return useTranslation(cartI18n.namespace);
}
