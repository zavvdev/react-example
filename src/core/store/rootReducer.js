import { combineReducers } from "@reduxjs/toolkit";
import { THEME_DOMAIN, themeReducer } from "core/store/theme/slice";
import { HTTP_API_DOMAIN, httpApi } from "core/store/api/http";

const rootReducer = combineReducers({
  [HTTP_API_DOMAIN]: httpApi.reducer,
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
