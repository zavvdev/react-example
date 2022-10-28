import { CART_REDUCER_NAME } from "cart/store/config";

const selectCartBooksLength = (state) => {
  return state[CART_REDUCER_NAME]?.books?.length || 0;
};

const selectCartBooks = (state) => {
  return state[CART_REDUCER_NAME]?.books || [];
};

export const cartSelectors = {
  selectCartBooksLength,
  selectCartBooks,
};
