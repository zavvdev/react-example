import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "app/store";
import { App } from "app/App";
import { APP_CONFIG } from "app/config";

function createWrapper({ initialStoreState, styling, history } = {}) {
  const store = configureStore({
    initialState: initialStoreState,
  });
  return function wrapper({ children }) {
    return (
      <App store={store} styling={styling} history={history}>
        {children}
      </App>
    );
  };
}

function render(
  ui,
  { initialStoreState, theme, history, ...renderOptions } = {},
) {
  const styling = {
    theme,
    generateId: (rule) => rule?.key,
  };

  return rtlRender(ui, {
    wrapper: createWrapper({
      initialStoreState,
      styling,
      history,
    }),
    ...renderOptions,
  });
}

function buildHttpApiRoute(route) {
  return `${APP_CONFIG.httpEndpoint}${route}`;
}

export const testUtils = {
  render,
  createWrapper,
  buildHttpApiRoute,
};
