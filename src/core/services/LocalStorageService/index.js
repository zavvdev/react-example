class LocalStorageService {
  constructor(webApiLocalStorage) {
    this.repository = webApiLocalStorage;
  }

  get(key) {
    return this.repository.getItem(key);
  }

  set(key, value) {
    this.repository.setItem(key, value);
  }

  remove(key) {
    this.repository.removeItem(key);
  }

  clear() {
    this.repository.clear();
  }

  getByIndex(index) {
    return this.repository.key(index);
  }

  getStorageLength() {
    return this.repository.length;
  }
}

const localStorageService = new LocalStorageService(localStorage);

export { localStorageService };
