import { themeActions } from "app/store/theme/slice";
import { themeSelectors } from "app/store/theme/selectors";
import { saveDarkModeStateToLocalStorage } from "app/store/theme/helpers";

function saveDarkModeToLocalStorageEffect(_, listenerApi) {
  const isDarkMode = themeSelectors.selectIsDarkMode(
    listenerApi.getOriginalState(),
  );
  saveDarkModeStateToLocalStorage(!isDarkMode);
}

const toggleDarkModeMiddleware = {
  actionCreator: themeActions.toggleDarkMode,
  effect: saveDarkModeToLocalStorageEffect,
};

export const themeMiddlewares = [toggleDarkModeMiddleware];
