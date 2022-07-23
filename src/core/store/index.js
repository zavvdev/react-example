import {
  configureStore as createStore,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "core/store/rootReducer";
import { rootMiddleware } from "core/store/rootMiddleware";

const middleware = createSagaMiddleware();

const configureStore = (args = {}) => {
  const { initialState = {} } = args;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: false,
      }).concat(middleware);
    },
  });
};

const store = configureStore();
middleware.run(rootMiddleware);

export { store, configureStore };
