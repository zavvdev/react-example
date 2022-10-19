import { localStorageService } from "app/services/LocalStorageService";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

export const createThemeDataStorageHelper = (localStorage) => ({
  saveDarkModeState(darkModeState) {
    return localStorage.set(
      IS_DARK_THEME_LOCAL_STORAGE_KEY,
      `${darkModeState}`,
    );
  },
  getDarkModeState() {
    const rawStorageValue = localStorage.get(IS_DARK_THEME_LOCAL_STORAGE_KEY);
    return Boolean(JSON.parse(rawStorageValue));
  },
});

export const themeDataStorageHelper =
  createThemeDataStorageHelper(localStorageService);
