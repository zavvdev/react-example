import { THEME_STORE_DOMAIN } from "app/store/theme/config";

const selectIsDarkMode = (state) => {
  return state[THEME_STORE_DOMAIN].isDarkMode;
};

export const themeSelectors = {
  selectIsDarkMode,
};