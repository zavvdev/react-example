import { render as rtlRender } from "@testing-library/react";
import { App } from "app/App";
import { childrenPropType } from "app/propTypes";

function render(ui, { store, theme, history, ...renderOptions } = {}) {
  const styling = {
    theme,
    generateId: (rule) => rule?.key,
  };

  function Wrapper({ children }) {
    return (
      <App store={store} styling={styling} history={history}>
        {children}
      </App>
    );
  }

  Wrapper.propTypes = {
    children: childrenPropType.isRequired,
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export const testUtils = {
  render,
};
