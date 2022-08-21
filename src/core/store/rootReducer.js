import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/theme/reducer";
import { THEME_DOMAIN } from "core/store/theme/config";
import { USER_API_DOMAIN } from "core/store/api/user/config";
import { userApiReducer } from "core/store/api/user/reducer";

const rootReducer = combineReducers({
  [USER_API_DOMAIN]: userApiReducer,
  [THEME_DOMAIN]: themeReducer,
});

export { rootReducer };
