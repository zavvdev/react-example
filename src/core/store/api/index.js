import { API_DOMAIN } from "core/store/api/config";
import { initReduxSagaFetched } from "packages/redux-saga-fetched";

const { reducer, request, select } = initReduxSagaFetched({
  domain: API_DOMAIN,
  actionTypePatterns: {
    request: "api@request",
    success: "api@success",
    failure: "api@failure",
  },
});

export {
  reducer as apiReducer,
  request as apiRequest,
  select as apiSelect,
};
