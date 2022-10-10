import { render as rtlRender } from "@testing-library/react";
import { TestWrapper } from "app/tests/TestWrapper";

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
      <TestWrapper
        initialStoreState={initialStoreState}
        styling={styling}
        history={history}
      >
        {children}
      </TestWrapper>
    ),
    ...renderOptions,
  });
}

export const testUtils = {
  render,
};
