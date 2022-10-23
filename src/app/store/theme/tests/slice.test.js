import {
  buildThemeStoreState,
  themeActions,
  themeReducer,
} from "app/store/theme/slice";

describe("theme store slice", () => {
  test("should build theme state", () => {
    const expectedState = {
      isDarkMode: true,
    };
    const actualState = buildThemeStoreState({
      isDarkMode: true,
    });
    expect(actualState).toEqual(expectedState);
  });

  test("should change isDarkMode state", () => {
    const initialState = buildThemeStoreState({
      isDarkMode: false,
    });
    const action = themeActions.toggleDarkMode;
    const expectedState = buildThemeStoreState({
      isDarkMode: true,
    });
    expect(themeReducer(initialState, action)).toEqual(expectedState);
  });
});
