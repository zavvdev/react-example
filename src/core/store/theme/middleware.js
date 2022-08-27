import { select, takeLatest } from "redux-saga/effects";
import { THEME_ACTION_TYPES } from "core/store/theme/config";
import { selectIsDarkMode } from "core/store/theme/selectors";
import { themeService } from "core/store/theme/service";

function* toggleDarkMode() {
  const isDarkMode = yield select(selectIsDarkMode);
  themeService.saveDarkModeState(isDarkMode);
}

export function* themeMiddleware() {
  yield takeLatest(THEME_ACTION_TYPES.toggleDarkMode, toggleDarkMode);
}
