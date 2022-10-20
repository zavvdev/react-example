import {
  getDarkModeStateFromLocalStorage,
  saveDarkModeStateToLocalStorage,
} from "app/store/theme/helpers";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

describe("theme helpers", () => {
  test("saveDarkModeStateToLocalStorage", () => {
    const expectedSavedStorageState = {
      key: IS_DARK_THEME_LOCAL_STORAGE_KEY,
      value: false,
    };
    saveDarkModeStateToLocalStorage(expectedSavedStorageState.value);
    expect(window.localStorage.getItem(expectedSavedStorageState.key)).toEqual(
      String(expectedSavedStorageState.value),
    );
  });

  test("getDarkModeStateFromLocalStorage", () => {
    const expectedSavedStorageState = true;
    window.localStorage.setItem(
      IS_DARK_THEME_LOCAL_STORAGE_KEY,
      expectedSavedStorageState,
    );
    const savedStorageState = getDarkModeStateFromLocalStorage();
    expect(savedStorageState).toEqual(expectedSavedStorageState);
  });
});
