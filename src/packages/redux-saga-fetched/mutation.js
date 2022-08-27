import {
  call, put,
} from "redux-saga/effects";
import { composeActionType, composeKey } from "packages/redux-saga-fetched/utils";

/*
  keys: string[];
  fn: () => Promise<unknown>;
*/

export const getMutation = (
  { actionTypePatterns },
) => function* mutation({
  keys, fn,
}) {
  const key = composeKey(keys);
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
