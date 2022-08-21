import { LOCAL_STORAGE_KEYS } from "core/config/localStorage";
import { localStorageService } from "core/services/LocalStorageService";

class ThemeService {
  constructor({ localStorageRepository }) {
    this.localStorageRepository = localStorageRepository;
  }

  saveDarkModeState(darkModeState) {
    this.localStorageRepository.set(
      LOCAL_STORAGE_KEYS.isThemeDarkMode,
      `${darkModeState}`,
    );
  }

  getDarkModeState() {
    const rawStorageValue = this.localStorageRepository.get(
      LOCAL_STORAGE_KEYS.isThemeDarkMode,
    );
    return !!JSON.parse(rawStorageValue);
  }
}

export const themeService = new ThemeService({
  localStorageRepository: localStorageService,
});
