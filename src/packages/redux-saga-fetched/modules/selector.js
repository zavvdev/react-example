import { createKey } from "packages/redux-saga-fetched/utils";

export const getSelector = ({ domain }) => (state, key) => {
  const createdKey = createKey(key);
  return state?.[domain]?.[createdKey];
};
