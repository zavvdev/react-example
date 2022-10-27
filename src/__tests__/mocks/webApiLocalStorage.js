const getLocalStorageMock = () => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },

    setItem(key, value) {
      store[key] = value;
      this.length += 1;
    },

    clear() {
      store = {};
      this.length = 0;
    },

    removeItem(key) {
      delete store[key];
      const currentLength = this.length;
      const nextLength = currentLength - 1;
      this.length = nextLength < 0 ? 0 : nextLength;
    },

    key(index) {
      if (typeof index !== "number") {
        return index;
      }
      return Object.keys(store)[index] || null;
    },

    length: Object.keys(store).length,
  };
};

Object.defineProperty(window, "localStorage", { value: getLocalStorageMock() });

beforeEach(() => {
  window.localStorage.clear();
});
