import { API_ACTION_TYPE_PATTERNS, API_DOMAIN } from "core/store/api/config";
import { initReduxSagaFetched } from "packages/redux-saga-fetched";

const {
  reducer, query, mutation, select, invalidate,
} = initReduxSagaFetched({
  domain: API_DOMAIN,
  actionTypePatterns: API_ACTION_TYPE_PATTERNS,
});

export {
  reducer as apiReducer,
  query as apiQuery,
  mutation as apiMutation,
  select as apiSelect,
  invalidate as apiInvalidate,
};
