import {
  call, put, select,
} from "redux-saga/effects";
import { composeKey } from "packages/redux-saga-fetched/utils";
import { ACTION_TYPES, DEFAULT_OPTIONS } from "packages/redux-saga-fetched/config";

/*
  keys: string[];
  fn: () => Promise<unknown>;
  options: {
    useCache: boolean;
  };
*/

export function* request({
  keys, fn, options,
}) {
  const { useCache } = options || DEFAULT_OPTIONS;
  const key = composeKey(keys);
  try {
    const cachedData = yield select((store) => store?.[key]?.data);
    if (useCache && cachedData) {
      return;
    }
    yield put({
      type: ACTION_TYPES.request,
      payload: {
        key,
      },
    });
    const data = yield call(fn);
    yield put({
      type: ACTION_TYPES.success,
      payload: {
        data,
        key,
      },
    });
  } catch (e) {
    yield put({
      type: ACTION_TYPES.failure,
      payload: {
        key,
      },
    });
    throw e;
  }
}
