import { localStorageService } from "app/services/LocalStorageService";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

export const saveDarkModeStateToLocalStorage = (darkModeState) => {
  localStorageService.set(IS_DARK_THEME_LOCAL_STORAGE_KEY, `${darkModeState}`);
};

export const getDarkModeStateFromLocalStorage = () => {
  const rawStorageValue = localStorageService.get(
    IS_DARK_THEME_LOCAL_STORAGE_KEY,
  );
  return Boolean(JSON.parse(rawStorageValue));
};
