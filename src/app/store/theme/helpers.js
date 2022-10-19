import { localStorageService } from "app/services/LocalStorageService";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

export const createThemeDataStorageHelper = (localStorageServiceInstance) => ({
  saveDarkModeState(darkModeState) {
    return localStorageServiceInstance.set(
      IS_DARK_THEME_LOCAL_STORAGE_KEY,
      `${darkModeState}`,
    );
  },
  getDarkModeState() {
    const rawStorageValue = localStorageServiceInstance.get(
      IS_DARK_THEME_LOCAL_STORAGE_KEY,
    );
    return Boolean(JSON.parse(rawStorageValue));
  },
});

export const themeDataStorageHelper =
  createThemeDataStorageHelper(localStorageService);
