import { configureStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "app/store/rootReducer";
import { rootApiMiddleware } from "app/store/rootApiMiddleware";

export const configureStore = (arguments_ = {}) => {
  const { initialState = {} } = arguments_;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rootApiMiddleware);
    },
  });
};

const store = configureStore();

export { store };
