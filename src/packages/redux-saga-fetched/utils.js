export const composeActionType = ({ key, actionTypePattern }) => {
  return `${key}_${actionTypePattern}`;
};

export const composeKey = (keys) => keys.join("_");

export const composeState = ({
  isLoading,
  isFetching,
  isLoaded,
  isError,
  error,
  data,
}) => ({
  isLoading,
  isFetching,
  isLoaded,
  isError,
  error,
  data,
});

export const composeDefaultState = () => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: false,
  data: null,
});

export const composeRequestState = ({ state, payload }) => composeState({
  isLoading: !state[payload.key]?.data,
  isFetching: !!state[payload.key]?.data,
  isLoaded: false,
  isError: false,
  data: state[payload.key]?.data || null,
});

export const composeSuccessState = ({ payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: true,
  isError: false,
  data: payload.data,
});

export const composeFailureState = () => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: true,
  data: null,
});
