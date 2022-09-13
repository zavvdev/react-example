import { THEME_STORE_DOMAIN } from "app/store/theme/config";

export const selectIsDarkMode = (state) => {
  return state[THEME_STORE_DOMAIN].isDarkMode;
};
