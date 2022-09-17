import { createSlice } from "@reduxjs/toolkit";
import { CART_STORE_DOMAIN } from "cart/store/config";

const cartInitialState = {
  books: [],
};

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
  },
});

export const { addBookToCart, removeBookFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
