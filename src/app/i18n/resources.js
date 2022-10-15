import { I18N_CONFIG } from "app/i18n/config";
import { appEn } from "app/i18n/en";
import { BOOKS_I18N_NAMESPACE, booksEn } from "books/gateway/output";
import { CART_I18N_NAMESPACE, cartEn } from "cart/gateway/output";
import { ORDER_I18N_NAMESPACE, orderEn } from "order/gateway/output";

export const resources = {
  [I18N_CONFIG.appLanguages.en]: {
    [I18N_CONFIG.namespace]: appEn,
    [BOOKS_I18N_NAMESPACE]: booksEn,
    [CART_I18N_NAMESPACE]: cartEn,
    [ORDER_I18N_NAMESPACE]: orderEn,
  },
};
