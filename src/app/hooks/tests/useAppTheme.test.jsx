import { renderHook } from "@testing-library/react";
import { useAppTheme } from "app/hooks/useAppTheme";
import { appLightTheme } from "app/styles/theme/light";
import { appDarkTheme } from "app/styles/theme/dark";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";
import { buildThemeStoreState } from "app/store/theme/slice";
import { testUtils } from "app/tests/utils";

const getInitialStoreState = ({ isDarkMode }) => ({
  [THEME_STORE_DOMAIN]: buildThemeStoreState({ isDarkMode }),
});

describe("useAppTheme hook", () => {
  test("should return light theme", () => {
    const { result } = renderHook(() => useAppTheme(), {
      wrapper: testUtils.createWrapper({
        initialStoreState: getInitialStoreState({ isDarkMode: false }),
      }),
    });
    expect(result.current).toBe(appLightTheme);
  });

  test("should return dark theme", () => {
    const { result } = renderHook(() => useAppTheme(), {
      wrapper: testUtils.createWrapper({
        initialStoreState: getInitialStoreState({ isDarkMode: true }),
      }),
    });
    expect(result.current).toBe(appDarkTheme);
  });
});
