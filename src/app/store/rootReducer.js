import { combineReducers } from "@reduxjs/toolkit";
import { themeSlice } from "app/store/theme/slice";
import { cartSlice } from "cart/gateway/output";
import { booksApi } from "books/gateway/output";
import { orderApi } from "order/gateway/output";

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

export { rootReducer };
