import { combineReducers } from "@reduxjs/toolkit";
import { cartStoreSetup } from "cart/gateway/output";
import { booksApiSetup } from "books/gateway/output";
import { orderApiSetup } from "order/gateway/output";

const rootReducer = combineReducers({
  [booksApiSetup.reducerName]: booksApiSetup.reducer,
  [orderApiSetup.reducerName]: orderApiSetup.reducer,
  [cartStoreSetup.reducerName]: cartStoreSetup.reducer,
});

export { rootReducer };
