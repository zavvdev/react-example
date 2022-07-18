import { createSlice } from "@reduxjs/toolkit";
import { DOMAIN, THEME_MODE_TYPES } from "core/store/entities/theme/config";

const initialThemeState = {
  mode: THEME_MODE_TYPES.light,
};

const themeSlice = createSlice({
  name: DOMAIN,
  initialState: initialThemeState,
  reducers: {
    setThemeMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
