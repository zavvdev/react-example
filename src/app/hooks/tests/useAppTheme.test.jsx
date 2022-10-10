import { renderHook } from "@testing-library/react";
import { useAppTheme } from "app/hooks/useAppTheme";
import { TestWrapper } from "app/tests/TestWrapper";
import { appLightTheme } from "app/styles/theme/light";
import { appDarkTheme } from "app/styles/theme/dark";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { buildThemeStoreState } from "app/store/theme/domain";

const getInitialStoreState = ({ isDarkMode }) => ({
  [THEME_STORE_DOMAIN]: buildThemeStoreState({ isDarkMode }),
});

describe("useAppTheme hook", () => {
  test("should return light theme", () => {
    const { result } = renderHook(() => useAppTheme(), {
      wrapper: ({ children }) => (
        <TestWrapper
          initialStoreState={getInitialStoreState({ isDarkMode: false })}
        >
          {children}
        </TestWrapper>
      ),
    });
    expect(result.current).toBe(appLightTheme);
  });

  test("should return dark theme", () => {
    const { result } = renderHook(() => useAppTheme(), {
      wrapper: ({ children }) => (
        <TestWrapper
          initialStoreState={getInitialStoreState({ isDarkMode: true })}
        >
          {children}
        </TestWrapper>
      ),
    });
    expect(result.current).toBe(appDarkTheme);
  });
});
