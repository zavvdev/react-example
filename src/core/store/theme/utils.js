import { LOCAL_STORAGE_KEYS } from "core/config/localStorage";
import { localStorageService } from "core/services/LocalStorageService";

export const saveDarkModeState = (darkModeState) => {
  localStorageService.set(
    LOCAL_STORAGE_KEYS.isThemeDarkMode,
    `${darkModeState}`,
  );
};

export const getDarkModeState = () => {
  const rawStorageValue = localStorageService.get(
    LOCAL_STORAGE_KEYS.isThemeDarkMode,
  );
  return !!JSON.parse(rawStorageValue);
};
