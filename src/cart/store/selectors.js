import { CART_STORE_DOMAIN } from "cart/store/config";

export const selectCartBooksLength = (state) => {
  return state[CART_STORE_DOMAIN]?.books?.length || 0;
};

export const selectCartBooks = (state) => {
  return state[CART_STORE_DOMAIN]?.books || [];
};
