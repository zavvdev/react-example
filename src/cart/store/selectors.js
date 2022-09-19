import { CART_STORE_DOMAIN } from "cart/store/config";

const selectCartBooksLength = (state) => {
  return state[CART_STORE_DOMAIN]?.books?.length || 0;
};

const selectCartBooks = (state) => {
  return state[CART_STORE_DOMAIN]?.books || [];
};

export const cartSelectors = {
  selectCartBooksLength,
  selectCartBooks,
};
