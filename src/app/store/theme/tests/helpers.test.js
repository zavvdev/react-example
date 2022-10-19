import { createThemeDataStorageHelper } from "app/store/theme/helpers";
import { IS_DARK_THEME_LOCAL_STORAGE_KEY } from "app/store/theme/config";

const localStorageServiceMock = {
  set: jest.fn(),
  get: jest.fn(),
};
const themeDataStorageHelper = createThemeDataStorageHelper(
  localStorageServiceMock,
);

describe("themeDataStorageHelper", () => {
  test("should call 'set' method & return proper key-value pair", () => {
    const expectedSavedStorageState = {
      key: IS_DARK_THEME_LOCAL_STORAGE_KEY,
      value: false,
    };
    localStorageServiceMock.set.mockReturnValue(expectedSavedStorageState);
    const savedStorageState = themeDataStorageHelper.saveDarkModeState(
      expectedSavedStorageState.value,
    );
    expect(localStorageServiceMock.set).toBeCalledWith(
      expectedSavedStorageState.key,
      String(expectedSavedStorageState.value),
    );
    expect(savedStorageState).toEqual(expectedSavedStorageState);
  });

  test("should call 'get' method with key accessor & return value", () => {
    const expectedSavedStorageState = true;
    localStorageServiceMock.get.mockReturnValue(
      String(expectedSavedStorageState),
    );
    const savedStorageState = themeDataStorageHelper.getDarkModeState();
    expect(localStorageServiceMock.get).toBeCalledWith(
      IS_DARK_THEME_LOCAL_STORAGE_KEY,
    );
    expect(savedStorageState).toEqual(expectedSavedStorageState);
  });
});
