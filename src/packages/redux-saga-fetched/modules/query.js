import {
  call, delay, fork, put, select,
} from "redux-saga/effects";
import { getInvalidate } from "packages/redux-saga-fetched/modules/invalidate";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import {
  DEFAULT_QUERY_OPTIONS, EFFECT_TYPES,
} from "packages/redux-saga-fetched/config";

/*
  key: string[];
  fn: () => Promise<unknown>;
  options: {
    useCache: boolean;
    invalidateInterval: number;
  };
*/

function* delayedInvalidate({ key, invalidateFn, ms }) {
  yield delay(ms);
  yield call(invalidateFn, key);
}

export const getQuery = (
  { actionTypePatterns, domain },
) => function* query({
  key, fn, options,
}) {
  const invalidate = getInvalidate({ actionTypePatterns, domain });

  const { useCache, invalidateInterval } = options || DEFAULT_QUERY_OPTIONS;
  const createdKey = createKey(key);

  try {
    const isValid = yield select((store) => {
      return store?.[domain]?.[createdKey]?.isValid;
    });
    if (useCache && isValid) {
      return;
    }
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.query].request,
      }),
      payload: {
        createdKey,
      },
    });
    const data = yield call(fn);
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.query].success,
      }),
      payload: {
        data,
        createdKey,
      },
    });
    if (invalidateInterval) {
      yield fork(delayedInvalidate, {
        key,
        invalidateFn: invalidate,
        ms: invalidateInterval,
      });
    }
  } catch (e) {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.query].failure,
      }),
      payload: {
        createdKey,
      },
    });
    throw e;
  }
};
