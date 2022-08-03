import { createAction } from "@reduxjs/toolkit";
import { THEME_ACTION_TYPES } from "core/store/theme/config";

const toggleDarkModeAction = createAction(THEME_ACTION_TYPES.toggleDarkMode);

export const themeActions = {
  toggleDarkMode: toggleDarkModeAction,
};
