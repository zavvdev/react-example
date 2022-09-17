import { localStorageService } from "app/services/LocalStorageService";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

export const saveDarkModeState = (darkModeState) => {
  localStorageService.set(IS_DARK_THEME_LOCAL_STORAGE_KEY, `${darkModeState}`);
};

export const getDarkModeState = () => {
  const rawStorageValue = localStorageService.get(
    IS_DARK_THEME_LOCAL_STORAGE_KEY,
  );
  return !!JSON.parse(rawStorageValue);
};
