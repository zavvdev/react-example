import { createSlice } from "@reduxjs/toolkit";
import { getDarkModeState, saveDarkModeState } from "app/store/theme/utils";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { listenerMiddleware } from "app/store/listenerMiddleware";
import { themeSelectors } from "app/store/theme/selectors";

const initialThemeState = {
  isDarkMode: getDarkModeState(),
};

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

listenerMiddleware.startListening({
  actionCreator: themeActions.toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = themeSelectors.selectIsDarkMode(
      listenerApi.getOriginalState(),
    );
    saveDarkModeState(!isDarkMode);
  },
});

export { themeActions, themeReducer };
