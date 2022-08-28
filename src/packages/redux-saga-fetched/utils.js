import { ACTION_TYPES, DATA_STATUS_TYPES } from "packages/redux-saga-fetched/config";

export const createActionType = ({ createdKey, actionTypePattern }) => {
  return `${createdKey}_${actionTypePattern}`;
};

export const createKey = (key) => key.join("_");

export const createActionTypePatterns = (domain) => ({
  request: `${domain}@${ACTION_TYPES.request}`,
  success: `${domain}@${ACTION_TYPES.success}`,
  failure: `${domain}@${ACTION_TYPES.failure}`,
  invalidate: `${domain}@${ACTION_TYPES.invalidate}`,
  reset: `${domain}@${ACTION_TYPES.reset}`,
});

export const createState = ({
  isLoading,
  isFetching,
  isLoaded,
  isError,
  isValid,
  status,
  data,
}) => ({
  isLoading,
  isFetching,
  isLoaded,
  isError,
  isValid,
  status,
  data,
});

export const createResetState = () => createState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: false,
  isValid: false,
  status: DATA_STATUS_TYPES.reset,
  data: null,
});

export const createRequestState = ({ state, payload }) => {
  const isLoading = !state[payload.createdKey]?.data;
  const isFetching = !!state[payload.createdKey]?.data;
  return createState({
    isLoading,
    isFetching,
    isLoaded: false,
    isError: false,
    isValid: false,
    status: isLoading ? DATA_STATUS_TYPES.loading : DATA_STATUS_TYPES.fetching,
    data: state[payload.createdKey]?.data || null,
  });
};

export const createSuccessState = ({ payload }) => createState({
  isLoading: false,
  isFetching: false,
  isLoaded: true,
  isError: false,
  isValid: true,
  status: DATA_STATUS_TYPES.loaded,
  data: payload.data,
});

export const createFailureState = ({ state, payload }) => createState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: true,
  isValid: false,
  status: DATA_STATUS_TYPES.error,
  data: state[payload.createdKey]?.data || null,
});

export const createInvalidateState = ({ state, payload }) => createState({
  isLoading: state[payload.createdKey]?.isLoading,
  isFetching: state[payload.createdKey]?.isFetching,
  isLoaded: state[payload.createdKey]?.isLoaded,
  isError: state[payload.createdKey]?.isError,
  isValid: false,
  status: state[payload.createdKey]?.status,
  data: state[payload.createdKey]?.data,
});
