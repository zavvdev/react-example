import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "cart/gateway/output";
import { booksApi } from "books/gateway/output";
import { orderApi } from "order/gateway/output";

const rootReducer = combineReducers({
  [booksApi.reducerPath]: booksApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  [cartSlice.name]: cartSlice.reducer,
});

export { rootReducer };
