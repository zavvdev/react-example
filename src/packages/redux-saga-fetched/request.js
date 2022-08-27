import {
  call, put, select,
} from "redux-saga/effects";
import { composeActionType, composeKey } from "packages/redux-saga-fetched/utils";
import {
  DEFAULT_REQUEST_OPTIONS,
} from "packages/redux-saga-fetched/config";

/*
  keys: string[];
  fn: () => Promise<unknown>;
  options: {
    useCache: boolean;
  };
*/

export const getRequest = (
  { actionTypePatterns, domain },
) => function* request({
  keys, fn, options,
}) {
  const { useCache } = options || DEFAULT_REQUEST_OPTIONS;
  const key = composeKey(keys);

  try {
    const cachedData = yield select((store) => store?.[domain]?.[key]?.data);
    if (useCache && cachedData) {
      return;
    }
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
