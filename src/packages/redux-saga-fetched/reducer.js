import {
  composeFailureState,
  composeRequestState,
  composeSuccessState,
} from "packages/redux-saga-fetched/utils";
import { ACTION_TYPES } from "packages/redux-saga-fetched/config";

export const reducer = (
  state = {
    getUsers: {},
    getUsers2: {},
  },
  action = {
    type: null,
    payload: null,
  },
) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.request: {
      return {
        ...state,
        [payload.key]: composeRequestState({ state, payload }),
      };
    }
    case ACTION_TYPES.success: {
      return {
        ...state,
        [payload.key]: composeSuccessState({ payload }),
      };
    }
    case ACTION_TYPES.failure: {
      return {
        ...state,
        [payload.key]: composeFailureState({ payload }),
      };
    }
    default: {
      return state;
    }
  }
};
