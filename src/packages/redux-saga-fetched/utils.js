import { DATA_STATUS_TYPES } from "packages/redux-saga-fetched/config";

export const composeActionType = ({ key, actionTypePattern }) => {
  return `${key}_${actionTypePattern}`;
};

export const composeKey = (keys) => keys.join("_");

export const composeState = ({
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

export const composeDefaultState = () => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: false,
  isValid: false,
  status: DATA_STATUS_TYPES.idle,
  data: null,
});

export const composeRequestState = ({ state, payload }) => {
  const isLoading = !state[payload.key]?.data;
  const isFetching = !!state[payload.key]?.data;
  return composeState({
    isLoading,
    isFetching,
    isLoaded: false,
    isError: false,
    isValid: false,
    status: isLoading ? DATA_STATUS_TYPES.loading : DATA_STATUS_TYPES.fetching,
    data: state[payload.key]?.data || null,
  });
};

export const composeSuccessState = ({ payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: true,
  isError: false,
  isValid: true,
  status: DATA_STATUS_TYPES.loaded,
  data: payload.data,
});

export const composeFailureState = ({ state, payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: true,
  isValid: false,
  status: DATA_STATUS_TYPES.error,
  data: state[payload.key]?.data || null,
});

export const composeInvalidateState = ({ state, payload }) => composeState({
  isLoading: state[payload.key]?.isLoading,
  isFetching: state[payload.key]?.isFetching,
  isLoaded: state[payload.key]?.isLoaded,
  isError: state[payload.key]?.isError,
  isValid: false,
  status: state[payload.key]?.status,
  data: state[payload.key]?.data,
});
