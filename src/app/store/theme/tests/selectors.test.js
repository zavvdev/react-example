import { themeSelectors } from "app/store/theme/selectors";
import { buildThemeStoreState } from "app/store/theme/slice";
import { THEME_STORE_DOMAIN } from "app/store/theme/config";

describe("themeSelectors", () => {
  test("should select isDarkMode state", () => {
    const state = {
      [THEME_STORE_DOMAIN]: buildThemeStoreState({
        isDarkMode: true,
      }),
    };
    expect(themeSelectors.selectIsDarkMode(state)).toBe(
      state[THEME_STORE_DOMAIN].isDarkMode,
    );
  });
});
