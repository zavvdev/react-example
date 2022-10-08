import { useSelector } from "react-redux";
import { themeSelectors } from "app/store/theme/domain";
import { appDarkTheme } from "app/styles/theme/dark";
import { appLightTheme } from "app/styles/theme/light";

export function useAppTheme() {
  const isDarkMode = useSelector(themeSelectors.selectIsDarkMode);
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
