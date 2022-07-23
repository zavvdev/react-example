import { localStorageService } from "core/services/LocalStorageService";
import { IS_DARK_MODE_LOCAL_STORAGE_KEY } from "core/store/entities/theme/config";

class ThemeService {
  constructor({ localStorageRepository }) {
    this.localStorageRepository = localStorageRepository;
  }

  saveDarkModeState(darkModeState) {
    this.localStorageRepository.set(
      IS_DARK_MODE_LOCAL_STORAGE_KEY,
      `${darkModeState}`,
    );
  }

  getDarkModeState() {
    const rawStorageValue = this.localStorageRepository.get(
      IS_DARK_MODE_LOCAL_STORAGE_KEY,
    );
    return !!JSON.parse(rawStorageValue);
  }
}

export const themeService = new ThemeService({
  localStorageRepository: localStorageService,
});
