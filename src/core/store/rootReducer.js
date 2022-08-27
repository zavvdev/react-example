import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/theme/reducer";
import { THEME_DOMAIN } from "core/store/theme/config";
import { apiReducer } from "core/store/api";
import { API_DOMAIN } from "core/store/api/config";

const rootReducer = combineReducers({
  [API_DOMAIN]: apiReducer,
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
