import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "app/store/theme/slice";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { CART_STORE_DOMAIN, cartReducer } from "cart/gateway/output";
import { booksApiSetup } from "books/gateway/output";
import { orderApiSetup } from "order/gateway/output";

const rootReducer = combineReducers({
  [booksApiSetup.reducerPath]: booksApiSetup.reducer,
  [orderApiSetup.reducerPath]: orderApiSetup.reducer,
  [THEME_STORE_DOMAIN]: themeReducer,
  [CART_STORE_DOMAIN]: cartReducer,
});

export { rootReducer };
