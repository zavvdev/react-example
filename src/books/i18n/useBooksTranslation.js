import { useTranslation } from "react-i18next";
import { booksI18n } from "books/i18n";

export function useBooksTranslation() {
  return useTranslation(booksI18n.namespace);
}
