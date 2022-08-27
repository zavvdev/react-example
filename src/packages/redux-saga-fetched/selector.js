import { composeKey } from "packages/redux-saga-fetched/utils";

export const getSelector = ({ domain }) => (state, keys) => {
  const key = composeKey(keys);
  return state?.[domain]?.[key];
};
