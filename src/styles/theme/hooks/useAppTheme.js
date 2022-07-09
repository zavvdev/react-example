import { appDarkTheme } from "styles/theme/dark";
import { appLightTheme } from "styles/theme/light";

export function useAppTheme() {
  const isDarkMode = false;
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
