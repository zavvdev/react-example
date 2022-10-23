import { createSlice } from "@reduxjs/toolkit";
import { CART_STORE_DOMAIN } from "cart/store/config";

export const buildCartStoreState = ({ books }) => ({
  books,
});

const cartInitialState = buildCartStoreState({
  books: [],
});

const cartSlice = createSlice({
  name: CART_STORE_DOMAIN,
  initialState: cartInitialState,
  reducers: {
    addBookToCart(state, action) {
      state.books.push(action.payload.book);
    },
    removeBookFromCart(state, action) {
      const nextBooks = state.books.filter(
        (book) => book.id !== action.payload.bookId,
      );
      state.books = nextBooks;
    },
    clearBooksCart(state) {
      state.books = [];
    },
  },
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
