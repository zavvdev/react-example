import { configureStore as createStore } from "@reduxjs/toolkit";
import { rootReducer } from "app/store/rootReducer";
import { httpApi } from "app/store/httpApi";
import { listenerMiddleware } from "app/store/listenerMiddleware";

const configureStore = (arguments_ = {}) => {
  const { initialState = {} } = arguments_;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .prepend(listenerMiddleware.middleware)
        .concat(httpApi.middleware);
    },
  });
};

const store = configureStore();

export { store };
