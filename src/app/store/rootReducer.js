import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "app/store/theme/domain";
import { HTTP_API_DOMAIN, httpApi } from "app/store/httpApi";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { CART_STORE_DOMAIN, cartReducer } from "cart/gateway/output";

const rootReducer = combineReducers({
  [HTTP_API_DOMAIN]: httpApi.reducer,
  [THEME_STORE_DOMAIN]: themeReducer,
  [CART_STORE_DOMAIN]: cartReducer,
});

export { rootReducer };
