import { toggleDarkMode } from "core/store/theme/slice";
import { selectIsDarkMode } from "core/store/theme/selectors";
import { saveDarkModeState } from "core/store/theme/utils";

// TODO: listenerMiddleware types are not enhanced
export const themeMiddleware = ({
  actionCreator: toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = selectIsDarkMode(listenerApi.getOriginalState());
    saveDarkModeState(!isDarkMode);
  },
});
