import { useSelector } from "react-redux";
import { selectIsDarkMode } from "app/store/theme/selectors";
import { appDarkTheme } from "app/styles/theme/dark";
import { appLightTheme } from "app/styles/theme/light";

export function useAppTheme() {
  const isDarkMode = useSelector(selectIsDarkMode);
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
