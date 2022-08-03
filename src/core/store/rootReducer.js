import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/theme/reducer";
import { THEME_DOMAIN } from "core/store/theme/config";

const rootReducer = combineReducers({
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
