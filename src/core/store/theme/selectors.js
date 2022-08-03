import { THEME_DOMAIN } from "core/store/theme/config";

export const selectIsDarkMode = (state) => {
  return state[THEME_DOMAIN].isDarkMode;
};
