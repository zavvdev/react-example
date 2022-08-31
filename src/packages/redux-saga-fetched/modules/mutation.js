import {
  all,
  call, put,
} from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import { DEFAULT_MUTATION_OPTIONS, EFFECT_TYPES } from "packages/redux-saga-fetched/config";
import { getInvalidate } from "packages/redux-saga-fetched/modules/invalidate";

/*
  key: string[];
  fn: () => Promise<unknown>;
  options: {
    invalidateKeys: Array<string>[];
  }
*/

export const getMutation = (
  { actionTypePatterns, domain },
) => function* mutation({
  key, fn, options,
}) {
  const invalidate = getInvalidate({ actionTypePatterns, domain });
  const createdKey = createKey(key);
  const { invalidateKeys } = options || DEFAULT_MUTATION_OPTIONS;
  try {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.mutation].request,
      }),
      payload: {
        createdKey,
      },
    });
    const data = yield call(fn);
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.mutation].success,
      }),
      payload: {
        data,
        createdKey,
      },
    });
    if (
      Array.isArray(invalidateKeys)
      && invalidateKeys.length > 0
    ) {
      yield all(invalidateKeys.map(
        (keyToInvalidate) => call(invalidate, keyToInvalidate),
      ));
    }
  } catch (e) {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.mutation].failure,
      }),
      payload: {
        createdKey,
      },
    });
    throw e;
  }
};
