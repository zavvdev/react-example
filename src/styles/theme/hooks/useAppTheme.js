import { useSelector } from "react-redux";
import { themeModeTypes } from "store/entities/theme/config";
import { selectThemeMode } from "store/entities/theme/selectors";
import { appDarkTheme } from "styles/theme/dark";
import { appLightTheme } from "styles/theme/light";

export function useAppTheme() {
  const themeMode = useSelector(selectThemeMode);
  const isDarkMode = themeMode === themeModeTypes.dark;
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
