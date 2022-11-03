import { configureStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "app/store/rootReducer";
import { rootApiMiddleware } from "app/store/rootApiMiddleware";
import { listenerMiddleware } from "app/store/listenerMiddleware";

export const configureStore = (arguments_ = {}) => {
  const { initialState = {} } = arguments_;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .prepend(listenerMiddleware.middleware)
        .concat(rootApiMiddleware);
    },
  });
};

const store = configureStore();

export { store };
