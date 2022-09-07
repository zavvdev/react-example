import {
  configureStore as createStore,
} from "@reduxjs/toolkit";
import { rootReducer } from "core/store/rootReducer";
import { httpApi } from "core/store/api/http";
import { listenerMiddleware } from "core/store/listenerMiddleware";
import "core/store/rootMiddleware";

const configureStore = (args = {}) => {
  const { initialState = {} } = args;
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

export { store, configureStore };
