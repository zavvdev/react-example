import {
  createQueryFailureState,
  createQueryInvalidateState,
  createQueryRequestState,
  createQueryResetState,
  createQuerySuccessState,
} from "packages/redux-saga-fetched/utils/query";
import {
  createMutationFailureState,
  createMutationRequestState,
  createMutationResetState,
  createMutationSuccessState,
} from "packages/redux-saga-fetched/utils/mutation";
import { EFFECT_TYPES } from "packages/redux-saga-fetched/config";

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

  // Query

  if (type.includes(actionTypePatterns[EFFECT_TYPES.query].request)) {
    return {
      ...state,
      [payload.createdKey]: createQueryRequestState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.query].success)) {
    return {
      ...state,
      [payload.createdKey]: createQuerySuccessState({ payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.query].failure)) {
    return {
      ...state,
      [payload.createdKey]: createQueryFailureState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.query].invalidate)) {
    return {
      ...state,
      [payload.createdKey]: createQueryInvalidateState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.query].reset)) {
    return {
      ...state,
      [payload.createdKey]: createQueryResetState(),
    };
  }

  // Mutation

  if (type.includes(actionTypePatterns[EFFECT_TYPES.mutation].request)) {
    return {
      ...state,
      [payload.createdKey]: createMutationRequestState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.mutation].success)) {
    return {
      ...state,
      [payload.createdKey]: createMutationSuccessState({ payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.mutation].failure)) {
    return {
      ...state,
      [payload.createdKey]: createMutationFailureState({ state, payload }),
    };
  }
  if (type.includes(actionTypePatterns[EFFECT_TYPES.mutation].reset)) {
    return {
      ...state,
      [payload.createdKey]: createMutationResetState(),
    };
  }

  return state;
};
