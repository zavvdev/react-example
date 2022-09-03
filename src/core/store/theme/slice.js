import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeState } from "core/store/theme/utils";

export const THEME_DOMAIN = "theme";

const initialThemeState = {
  isDarkMode: getDarkModeState(),
};

const themeSlice = createSlice({
  name: THEME_DOMAIN,
  initialState: initialThemeState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
