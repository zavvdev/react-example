import { useSelector } from "react-redux";
import { selectIsDarkMode } from "core/store/entities/theme/selectors";
import { appDarkTheme } from "ui/styles/theme/dark";
import { appLightTheme } from "ui/styles/theme/light";

export function useAppTheme() {
  const isDarkMode = useSelector(selectIsDarkMode);
  const theme = isDarkMode ? appDarkTheme : appLightTheme;
  return theme;
}
