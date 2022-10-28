import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeStateFromLocalStorage } from "app/store/theme/helpers";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";

const buildThemeStoreState = ({ isDarkMode }) => ({
  isDarkMode,
});

const initialThemeState = buildThemeStoreState({
  isDarkMode: getDarkModeStateFromLocalStorage(),
});

export const themeSlice = createSlice({
  name: THEME_STORE_DOMAIN,
  initialState: initialThemeState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const themeActions = themeSlice.actions;
const themeReducer = themeSlice.reducer;

export { themeActions, themeReducer, buildThemeStoreState };
