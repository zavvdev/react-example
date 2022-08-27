import {
  composeFailureState,
  composeInvalidateState,
  composeRequestState,
  composeSuccessState,
} from "packages/redux-saga-fetched/utils";

export const getReducer = ({ actionTypePatterns }) => (
  state = {},
  action = {
    type: null,
    payload: {
      key: null,
      data: null,
    },
  },
) => {
  const { type, payload } = action;

  if (type.includes(actionTypePatterns.request)) {
    return {
      ...state,
      [payload.key]: composeRequestState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns.success)) {
    return {
      ...state,
      [payload.key]: composeSuccessState({ payload }),
    };
  }
  if (type.includes(actionTypePatterns.failure)) {
    return {
      ...state,
      [payload.key]: composeFailureState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns.invalidate)) {
    return {
      ...state,
      [payload.key]: composeInvalidateState({ state, payload }),
    };
  }
  return state;
};
