import { localStorageService } from "app/services/LocalStorageService";

describe("LocalStorageService", () => {
  test("should get value from storage", () => {
    const key = "getKey";
    const value = "getValue";
    window.localStorage.setItem(key, value);
    const result = localStorageService.get(key);
    expect(result).toBe(value);
  });

  test("should write value to storage", () => {
    const key = "setKey";
    const value = "setValue";
    localStorageService.set(key, value);
    const storageValue = window.localStorage.getItem(key);
    expect(storageValue).toEqual(value);
  });

  test("should remove value from storage", () => {
    const key = "removeKey";
    const value = "removeValue";
    window.localStorage.setItem(key, value);
    expect(window.localStorage.getItem(key)).toEqual(value);
    localStorageService.remove(key);
    expect(window.localStorage.getItem(key)).toEqual(null);
  });

  test("should clear storage", () => {
    const key = "clearKey";
    const value = "clearValue";
    window.localStorage.setItem(key, value);
    expect(window.localStorage.length).toEqual(1);
    localStorageService.clear();
    expect(window.localStorage.length).toEqual(0);
  });

  test("should get storage key name by index and name", () => {
    const key = "key";
    const value = "value";
    window.localStorage.setItem(key, value);
    expect(localStorageService.getByIndex(0)).toEqual(key);
    expect(localStorageService.getByIndex(1)).toEqual(null);
    expect(localStorageService.getByIndex(key)).toEqual(key);
  });

  test("should get storage length", () => {
    const key = "key";
    const value = "value";
    expect(localStorageService.getStorageLength()).toBe(0);
    window.localStorage.setItem(key, value);
    expect(localStorageService.getStorageLength()).toBe(1);
  });
});
