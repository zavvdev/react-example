import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/entities/theme/reducer";
import { THEME_DOMAIN } from "core/store/entities/theme/config";

const rootReducer = combineReducers({
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
