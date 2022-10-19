import { LocalStorageService } from "app/services/LocalStorageService";

const webApiLocalStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 42,
};

const localStorageService = new LocalStorageService(webApiLocalStorageMock);

describe("LocalStorageService", () => {
  test("should call 'get' method", () => {
    const key = "getKey";
    const returnValue = "getReturn";
    webApiLocalStorageMock.getItem.mockReturnValue(returnValue);
    const result = localStorageService.get(key);
    expect(webApiLocalStorageMock.getItem).toBeCalledWith(key);
    expect(result).toBe(returnValue);
  });

  test("should call 'set' method and return saved key-value pair", () => {
    const expectedSavedData = {
      key: "setKey",
      value: "setValue",
    };
    webApiLocalStorageMock.getItem.mockReturnValue(expectedSavedData.value);
    const savedData = localStorageService.set(
      expectedSavedData.key,
      expectedSavedData.value,
    );
    expect(webApiLocalStorageMock.setItem).toBeCalledWith(
      expectedSavedData.key,
      expectedSavedData.value,
    );
    expect(savedData).toEqual(expectedSavedData);
  });

  test("should call 'remove' method and return removed key-value pair", () => {
    const expectedReturnData = {
      key: "setKey",
      value: undefined,
    };
    webApiLocalStorageMock.getItem.mockReturnValue(expectedReturnData.value);
    const returnData = localStorageService.remove(expectedReturnData.key);
    expect(webApiLocalStorageMock.removeItem).toBeCalledWith(
      expectedReturnData.key,
    );
    expect(returnData).toEqual(expectedReturnData);
  });

  test("should call 'clear' method and return storage length", () => {
    const storageLengthAfterClear = localStorageService.clear();
    expect(webApiLocalStorageMock.clear).toBeCalled();
    expect(storageLengthAfterClear).toBe(webApiLocalStorageMock.length);
  });

  test("should call 'getByIndex' method", () => {
    const index = "getByIndex";
    const returnValue = "getByIndexReturn";
    webApiLocalStorageMock.key.mockReturnValue(returnValue);
    const result = localStorageService.getByIndex(index);
    expect(webApiLocalStorageMock.key).toBeCalledWith(index);
    expect(result).toBe(returnValue);
  });

  test("should get storage length", () => {
    expect(localStorageService.getStorageLength()).toBe(
      webApiLocalStorageMock.length,
    );
  });
});
