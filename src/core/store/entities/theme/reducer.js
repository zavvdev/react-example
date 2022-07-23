import { createReducer } from "@reduxjs/toolkit";
import { themeActions } from "core/store/entities/theme/actions";

const initialThemeState = {
  isDarkMode: false,
};

export const themeReducer = createReducer(initialThemeState, (builder) => {
  builder
    .addCase(themeActions.toggleDarkMode, (state) => {
      state.isDarkMode = !state.isDarkMode;
    });
});
