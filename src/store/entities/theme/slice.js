import { createSlice } from "@reduxjs/toolkit";
import { themeModeTypes } from "store/entities/theme/config";

const initialThemeState = {
  mode: themeModeTypes.light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setThemeMode(state, action) {
      state.mode = action.payload.mode;
    },
  },
});

export const themeActions = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
