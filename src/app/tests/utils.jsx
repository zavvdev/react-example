import { render as rtlRender } from "@testing-library/react";
import { Wrapper } from "app/tests/Wrapper";

function render(
  ui,
  { initialStoreState, theme, history, ...renderOptions } = {},
) {
  const styling = {
    theme,
    generateId: (rule) => rule?.key,
  };

  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <Wrapper
        initialStoreState={initialStoreState}
        styling={styling}
        history={history}
      >
        {children}
      </Wrapper>
    ),
    ...renderOptions,
  });
}

export const testUtils = {
  render,
};
