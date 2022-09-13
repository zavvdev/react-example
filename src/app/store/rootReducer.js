import { combineReducers } from "@reduxjs/toolkit";
import { HTTP_API_DOMAIN, httpApi } from "app/store/httpApi";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { themeReducer } from "app/store/theme/slice";

const rootReducer = combineReducers({
  [HTTP_API_DOMAIN]: httpApi.reducer,
  [THEME_STORE_DOMAIN]: themeReducer,
});

export { rootReducer };
