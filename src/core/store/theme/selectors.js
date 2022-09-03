import { THEME_DOMAIN } from "core/store/theme/slice";

export const selectIsDarkMode = (state) => {
  return state[THEME_DOMAIN].isDarkMode;
};
