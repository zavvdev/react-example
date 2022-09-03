import { toggleDarkMode } from "core/store/theme/slice";
import { selectIsDarkMode } from "core/store/theme/selectors";
import { themeService } from "core/store/theme/service";

// TODO: listenerMiddleware types are not enhanced
export const themeMiddleware = ({
  actionCreator: toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = selectIsDarkMode(listenerApi.getOriginalState());
    themeService.saveDarkModeState(!isDarkMode);
  },
});
