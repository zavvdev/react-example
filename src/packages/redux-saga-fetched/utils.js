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
  status,
  data,
}) => ({
  isLoading,
  isFetching,
  isLoaded,
  isError,
  status,
  data,
});

export const composeDefaultState = () => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: false,
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
    status: isLoading ? DATA_STATUS_TYPES.loading : DATA_STATUS_TYPES.fetching,
    data: state[payload.key]?.data || null,
  });
};

export const composeSuccessState = ({ payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: true,
  isError: false,
  status: DATA_STATUS_TYPES.loaded,
  data: payload.data,
});

export const composeFailureState = () => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: true,
  status: DATA_STATUS_TYPES.error,
  data: null,
});
