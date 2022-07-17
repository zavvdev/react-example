import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "core/store/entities/theme/slice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export { rootReducer };
