import {
  IS_DARK_THEME_LOCAL_STORAGE_KEY,
  THEME_STORE_DOMAIN,
} from "app/store/theme/config";
import { buildThemeStoreState } from "app/store/theme/slice";
import { saveDarkModeToLocalStorageEffect } from "app/store/theme/middleware";

const darkModeState = true;

const listenerApiMock = {
  getOriginalState() {
    return {
      [THEME_STORE_DOMAIN]: buildThemeStoreState({
        isDarkMode: darkModeState,
      }),
    };
  },
};

describe("theme middleware", () => {
  test("should save next dark mode state to local storage", () => {
    expect(
      window.localStorage.getItem(IS_DARK_THEME_LOCAL_STORAGE_KEY),
    ).toEqual(null);
    saveDarkModeToLocalStorageEffect({}, listenerApiMock);
    expect(
      window.localStorage.getItem(IS_DARK_THEME_LOCAL_STORAGE_KEY),
    ).toEqual(String(!darkModeState));
  });
});
