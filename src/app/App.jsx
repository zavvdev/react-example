import "app/i18n";
import "app/styles/global.css";
import PropTypes from "prop-types";
import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { Router } from "app/router/Router";
import { childrenPropType as childrenPropertyType } from "app/propTypes";

export function App({ children, store, styling, history }) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={styling?.theme} generateId={styling?.generateId}>
        <Router history={history}>{children}</Router>
      </ThemeProvider>
    </StoreProvider>
  );
}

App.propTypes = {
  children: childrenPropertyType,
  store: PropTypes.shape({}),
  styling: PropTypes.shape({
    theme: PropTypes.shape({}),
    generateId: PropTypes.func,
  }),
  history: PropTypes.shape({}),
};

App.defaultProps = {
  children: undefined,
  store: undefined,
  styling: undefined,
  history: undefined,
};
