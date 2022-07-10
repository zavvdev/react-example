import { combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "store/entities/theme/slice";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export { rootReducer };
