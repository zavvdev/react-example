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

  test("should call 'set' method", () => {
    const key = "setKey";
    const value = "setValue";
    localStorageService.set(key, value);
    expect(webApiLocalStorageMock.setItem).toBeCalledWith(key, value);
  });

  test("should call 'remove' method", () => {
    const key = "removeKey";
    localStorageService.remove(key);
    expect(webApiLocalStorageMock.removeItem).toBeCalledWith(key);
  });

  test("should call 'clear' method", () => {
    localStorageService.clear();
    expect(webApiLocalStorageMock.clear).toBeCalled();
  });

  test("should call 'getByIndex' method", () => {
    const index = "getByIndex";
    const returnValue = "getByIndexReturn";
    webApiLocalStorageMock.key.mockReturnValue(returnValue);
    const result = localStorageService.getByIndex(index);
    expect(webApiLocalStorageMock.key).toBeCalledWith(index);
    expect(result).toBe(returnValue);
  });
});
