import { JssProvider, ThemeProvider as JssThemeProvider } from "react-jss";
import PropTypes from "prop-types";
import { childrenPropType } from "app/propTypes";
import { useAppTheme } from "app/hooks/useAppTheme";

export function ThemeProvider({ children, theme, generateId }) {
  const appTheme = useAppTheme();
  return (
    <JssProvider generateId={generateId}>
      <JssThemeProvider theme={theme || appTheme}>{children}</JssThemeProvider>
    </JssProvider>
  );
}

ThemeProvider.propTypes = {
  children: childrenPropType.isRequired,
  theme: PropTypes.shape({}),
  generateId: PropTypes.func,
};

ThemeProvider.defaultProps = {
  theme: undefined,
  generateId: undefined,
};
