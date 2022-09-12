import { THEME_DOMAIN } from "app/store/theme/config";

export const selectIsDarkMode = (state) => {
  return state[THEME_DOMAIN].isDarkMode;
};
