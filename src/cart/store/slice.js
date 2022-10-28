import { createSlice } from "@reduxjs/toolkit";
import { CART_REDUCER_NAME } from "cart/store/config";

export const buildCartStoreState = ({ books }) => ({
  books,
});

const cartInitialState = buildCartStoreState({
  books: [],
});

const cartSlice = createSlice({
  name: CART_REDUCER_NAME,
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

export { cartActions };

export const cartStoreSetup = {
  reducer: cartSlice.reducer,
  reducerName: cartSlice.name,
};
