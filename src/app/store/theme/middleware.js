import { toggleDarkMode } from "app/store/theme/slice";
import { selectIsDarkMode } from "app/store/theme/selectors";
import { saveDarkModeState } from "app/store/theme/utils";
import { listenerMiddleware } from "app/store/listenerMiddleware";

listenerMiddleware.startListening({
  actionCreator: toggleDarkMode,
  effect: (_, listenerApi) => {
    const isDarkMode = selectIsDarkMode(listenerApi.getOriginalState());
    saveDarkModeState(!isDarkMode);
  },
});
