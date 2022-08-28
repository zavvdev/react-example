import {
  createFailureState,
  createInvalidateState,
  createRequestState,
  createResetState,
  createSuccessState,
} from "packages/redux-saga-fetched/utils";

export const getReducer = ({ actionTypePatterns }) => (
  state = {},
  action = {
    type: null,
    payload: {
      createdKey: null,
      data: null,
    },
  },
) => {
  const { type, payload } = action;

  if (type.includes(actionTypePatterns.request)) {
    return {
      ...state,
      [payload.createdKey]: createRequestState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns.success)) {
    return {
      ...state,
      [payload.createdKey]: createSuccessState({ payload }),
    };
  }
  if (type.includes(actionTypePatterns.failure)) {
    return {
      ...state,
      [payload.createdKey]: createFailureState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns.invalidate)) {
    return {
      ...state,
      [payload.createdKey]: createInvalidateState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns.reset)) {
    return {
      ...state,
      [payload.createdKey]: createResetState(),
    };
  }
  return state;
};
