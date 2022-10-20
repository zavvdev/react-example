import { themeActions } from "app/store/theme/slice";
import { themeSelectors } from "app/store/theme/selectors";
import { saveDarkModeStateToLocalStorage } from "app/store/theme/helpers";

export function saveDarkModeToLocalStorageEffect(_, listenerApi) {
  const isDarkMode = themeSelectors.selectIsDarkMode(
    listenerApi.getOriginalState(),
  );
  saveDarkModeStateToLocalStorage(!isDarkMode);
}

export const themeMiddlewares = [
  {
    actionCreator: themeActions.toggleDarkMode,
    effect: saveDarkModeToLocalStorageEffect,
  },
];
