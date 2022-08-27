import {
  all,
  call, put,
} from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import { DEFAULT_MUTATION_OPTIONS } from "packages/redux-saga-fetched/config";
import { getInvalidate } from "packages/redux-saga-fetched/modules/invalidate";

/*
  key: string[];
  fn: () => Promise<unknown>;
  options: {
    invalidateKeys: Array<string>[];
  }
*/

export const getMutation = (
  { actionTypePatterns },
) => function* mutation({
  key, fn, options,
}) {
  const invalidate = getInvalidate({ actionTypePatterns });
  const createdKey = createKey(key);
  const { invalidateKeys } = options || DEFAULT_MUTATION_OPTIONS;
  try {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.request,
      }),
      payload: {
        createdKey,
      },
    });
    const data = yield call(fn);
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.success,
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
        actionTypePattern: actionTypePatterns.failure,
      }),
      payload: {
        createdKey,
      },
    });
    throw e;
  }
};