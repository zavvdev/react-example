import {
  all,
  call, put,
} from "redux-saga/effects";
import { composeActionType, composeKey } from "packages/redux-saga-fetched/utils";
import { DEFAULT_MUTATION_OPTIONS } from "packages/redux-saga-fetched/config";
import { getInvalidate } from "packages/redux-saga-fetched/invalidate";

/*
  keys: string[];
  fn: () => Promise<unknown>;
  options: {
    invalidateKeysOnSuccess: Array<string>[];
  }
*/

export const getMutation = (
  { actionTypePatterns },
) => function* mutation({
  keys, fn, options,
}) {
  const invalidate = getInvalidate({ actionTypePatterns });
  const key = composeKey(keys);
  const { invalidateKeysOnSuccess } = options || DEFAULT_MUTATION_OPTIONS;
  try {
    yield put({
      type: composeActionType({
        key,
        actionTypePattern: actionTypePatterns.request,
      }),
      payload: {
        key,
      },
    });
    const data = yield call(fn);
    yield put({
      type: composeActionType({
        key,
        actionTypePattern: actionTypePatterns.success,
      }),
      payload: {
        data,
        key,
      },
    });
    if (
      Array.isArray(invalidateKeysOnSuccess)
      && invalidateKeysOnSuccess.length > 0
    ) {
      yield all(invalidateKeysOnSuccess.map((i) => call(invalidate, i)));
    }
  } catch (e) {
    yield put({
      type: composeActionType({
        key,
        actionTypePattern: actionTypePatterns.failure,
      }),
      payload: {
        key,
      },
    });
    throw e;
  }
};
