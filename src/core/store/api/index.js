import { API_DOMAIN } from "core/store/api/config";
import { init as initReduxSagaFetched } from "packages/redux-saga-fetched";

const {
  reducer,
  query,
  mutation,
  select,
  invalidate,
  createActionTypeFromKey,
} = initReduxSagaFetched({
  domain: API_DOMAIN,
});

export {
  reducer as apiReducer,
  query as apiQuery,
  mutation as apiMutation,
  select as apiSelect,
  invalidate as apiInvalidate,
  createActionTypeFromKey,
};
