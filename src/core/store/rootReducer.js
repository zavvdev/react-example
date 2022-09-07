import { combineReducers } from "@reduxjs/toolkit";
import { HTTP_API_DOMAIN } from "core/store/api/config";
import { httpApi } from "core/store/api/http";
import { THEME_DOMAIN } from "core/store/theme/config";
import { themeReducer } from "core/store/theme/slice";

const rootReducer = combineReducers({
  [HTTP_API_DOMAIN]: httpApi.reducer,
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
