export class LocalStorageService {
  constructor(webApiLocalStorage) {
    this.repository = webApiLocalStorage;
  }

  get(key) {
    return this.repository.getItem(key);
  }

  set(key, value) {
    this.repository.setItem(key, value);
    return {
      key,
      value: this.repository.getItem(key),
    };
  }

  remove(key) {
    this.repository.removeItem(key);
    return {
      key,
      value: this.repository.getItem(key),
    };
  }

  clear() {
    this.repository.clear();
    return this.repository.length;
  }

  getByIndex(index) {
    return this.repository.key(index);
  }

  getStorageLength() {
    return this.repository.length;
  }
}

export const localStorageService = new LocalStorageService(localStorage);
