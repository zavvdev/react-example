import { ThemeProvider as JssThemeProvider } from "react-jss";
import { childrenPropType } from "ui/propTypes/children";
import { useAppTheme } from "ui/hooks/useAppTheme";

export function ThemeProvider({ children }) {
  const appTheme = useAppTheme();

  return (
    <JssThemeProvider theme={appTheme}>
      {children}
    </JssThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: childrenPropType.isRequired,
};
