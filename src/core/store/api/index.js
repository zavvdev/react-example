import { API_DOMAIN } from "core/store/api/config";
import { initReduxSagaFetched } from "packages/redux-saga-fetched";

const {
  reducer, query, mutation, select,
} = initReduxSagaFetched({
  domain: API_DOMAIN,
  actionTypePatterns: {
    request: "api@request",
    success: "api@success",
    failure: "api@failure",
  },
});

export {
  reducer as apiReducer,
  query as apiQuery,
  mutation as apiMutation,
  select as apiSelect,
};
