import { THEME_DOMAIN } from "core/store/entities/theme/config";

export const selectIsDarkMode = (state) => {
  return state[THEME_DOMAIN].isDarkMode;
};
