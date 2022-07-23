import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/entities/theme/reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export { rootReducer };
