import { useSelector } from "react-redux";
import { THEME_MODE_TYPES } from "core/store/entities/theme/config";
import { selectThemeMode } from "core/store/entities/theme/selectors";
import { appDarkTheme } from "ui/styles/theme/dark";
import { appLightTheme } from "ui/styles/theme/light";

export function useAppTheme() {
  const themeMode = useSelector(selectThemeMode);
  const isDarkMode = themeMode === THEME_MODE_TYPES.dark;
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
