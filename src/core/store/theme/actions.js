import { createAction } from "@reduxjs/toolkit";
import { THEME_ACTION_TYPES } from "core/store/theme/config";

export const themeActions = {
  toggleDarkMode: createAction(THEME_ACTION_TYPES.toggleDarkMode),
};
