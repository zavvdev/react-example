import { createSlice } from "@reduxjs/toolkit";
import {
  getDarkModeStateFromLocalStorage,
  saveDarkModeStateToLocalStorage,
} from "app/store/theme/utils";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { listenerMiddleware } from "app/store/listenerMiddleware";

const buildThemeStoreState = ({ isDarkMode }) => ({
  isDarkMode,
});

const initialThemeState = buildThemeStoreState({
  isDarkMode: getDarkModeStateFromLocalStorage(),
});

/* Slice */

const themeSlice = createSlice({
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

/* Selectors */

const selectIsDarkMode = (state) => {
  return state[THEME_STORE_DOMAIN].isDarkMode;
};
const themeSelectors = {
  selectIsDarkMode,
};

/* Middleware */

listenerMiddleware.startListening({
  actionCreator: themeActions.toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = selectIsDarkMode(listenerApi.getOriginalState());
    saveDarkModeStateToLocalStorage(!isDarkMode);
  },
});

/* --------- */

export { themeActions, themeReducer, themeSelectors, buildThemeStoreState };
