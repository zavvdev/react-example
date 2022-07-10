import { ThemeProvider as JssThemeProvider } from "react-jss";
import { childrenPropType } from "propTypes/children";
import { useAppTheme } from "styles/theme/hooks/useAppTheme";

function Provider({ children }) {
  const appTheme = useAppTheme();

  return (
    <JssThemeProvider theme={appTheme}>
      {children}
    </JssThemeProvider>
  );
}

Provider.propTypes = {
  children: childrenPropType.isRequired,
};

export { Provider };
