import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";
import { localStorageService } from "app/services/LocalStorageService";

export const saveDarkModeState = (darkModeState) => {
  localStorageService.set(IS_DARK_THEME_LOCAL_STORAGE_KEY, `${darkModeState}`);
};

export const getDarkModeState = () => {
  const rawStorageValue = localStorageService.get(
    IS_DARK_THEME_LOCAL_STORAGE_KEY,
  );
  return !!JSON.parse(rawStorageValue);
};
