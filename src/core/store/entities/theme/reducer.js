import { createReducer } from "@reduxjs/toolkit";
import { themeActions } from "core/store/entities/theme/actions";
import { themeService } from "core/store/entities/theme/service";

const initialThemeState = {
  isDarkMode: themeService.getDarkModeState(),
};

export const themeReducer = createReducer(initialThemeState, (builder) => {
  builder
    .addCase(themeActions.toggleDarkMode, (state) => {
      state.isDarkMode = !state.isDarkMode;
    });
});
