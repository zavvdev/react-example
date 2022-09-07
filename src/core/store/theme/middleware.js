import { toggleDarkMode } from "core/store/theme/slice";
import { selectIsDarkMode } from "core/store/theme/selectors";
import { saveDarkModeState } from "core/store/theme/utils";
import { listenerMiddleware } from "core/store/listenerMiddleware";

listenerMiddleware.startListening({
  actionCreator: toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = selectIsDarkMode(listenerApi.getOriginalState());
    saveDarkModeState(!isDarkMode);
  },
});
