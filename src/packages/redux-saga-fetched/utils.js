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
  error: null,
  data: null,
});

export const composeRequestState = ({ state, payload }) => composeState({
  isLoading: !state[payload.key].data,
  isFetching: !!state[payload.key].data,
  isLoaded: false,
  isError: false,
  error: null,
  data: state[payload.key]?.data || null,
});

export const composeSuccessState = ({ payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: true,
  isError: false,
  error: null,
  data: payload.data,
});

export const composeFailureState = ({ payload }) => composeState({
  isLoading: false,
  isFetching: false,
  isLoaded: false,
  isError: true,
  error: payload.error,
  data: null,
});
