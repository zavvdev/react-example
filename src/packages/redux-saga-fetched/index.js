import { getReducer } from "packages/redux-saga-fetched/reducer";
import { getRequest } from "packages/redux-saga-fetched/request";
import { getSelector } from "packages/redux-saga-fetched/selector";
import { ACTION_TYPE_PATTERNS, DOMAIN } from "packages/redux-saga-fetched/config";

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
    request: getRequest({
      actionTypePatterns: options.actionTypePatterns,
      domain: options.domain,
    }),
    select: getSelector({
      domain: options.domain,
    }),
  };
};
