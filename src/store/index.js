import {
  configureStore as createStore,
} from "@reduxjs/toolkit";
import { rootReducer } from "store/rootReducer";

const configureStore = (args = {}) => {
  const { initialState = {} } = args;
  return createStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

const store = configureStore();

export { store, configureStore };
