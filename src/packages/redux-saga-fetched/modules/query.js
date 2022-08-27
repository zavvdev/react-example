import {
  call, put, select,
} from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import {
  DEFAULT_QUERY_OPTIONS,
} from "packages/redux-saga-fetched/config";

/*
  key: string[];
  fn: () => Promise<unknown>;
  options: {
    useCache: boolean;
  };
*/

export const getQuery = (
  { actionTypePatterns, domain },
) => function* query({
  key, fn, options,
}) {
  const { useCache } = options || DEFAULT_QUERY_OPTIONS;
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
