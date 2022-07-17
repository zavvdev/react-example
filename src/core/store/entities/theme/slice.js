import { createSlice } from "@reduxjs/toolkit";
import { domain, themeModeTypes } from "core/store/entities/theme/config";

const initialThemeState = {
  mode: themeModeTypes.light,
};

const themeSlice = createSlice({
  name: domain,
  initialState: initialThemeState,
  reducers: {
    setThemeMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
