import { getReducer } from "packages/redux-saga-fetched/reducer";
import { getQuery } from "packages/redux-saga-fetched/query";
import { getSelector } from "packages/redux-saga-fetched/selector";
import { ACTION_TYPE_PATTERNS, DOMAIN } from "packages/redux-saga-fetched/config";
import { getMutation } from "packages/redux-saga-fetched/mutation";

export const initReduxSagaFetched = ({
  domain,
  actionTypePatterns,
}) => {
  const options = {
    domain: domain || DOMAIN,
    actionTypePatterns: actionTypePatterns || ACTION_TYPE_PATTERNS,
  };

  return {
    reducer: getReducer({
      actionTypePatterns: options.actionTypePatterns,
    }),
    query: getQuery({
      actionTypePatterns: options.actionTypePatterns,
      domain: options.domain,
    }),
    mutation: getMutation({
      actionTypePatterns: options.actionTypePatterns,
    }),
    select: getSelector({
      domain: options.domain,
    }),
  };
};
