import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeState } from "app/store/theme/utils";
import { THEME_DOMAIN } from "app/store/theme/config";

const initialThemeState = {
  isDarkMode: getDarkModeState(),
};

const themeSlice = createSlice({
  name: THEME_DOMAIN,
  initialState: initialThemeState,
  reducers: {
    toggleDarkMode(state) {
      // eslint-disable-next-line no-param-reassign
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
