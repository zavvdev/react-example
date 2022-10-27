import { useTranslation } from "react-i18next";
import { orderI18n } from "order/i18n";

export function useOrderTranslation() {
  return useTranslation(orderI18n.namespace);
}
