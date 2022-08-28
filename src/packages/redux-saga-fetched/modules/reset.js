import { put, select } from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import { DATA_STATUS_TYPES } from "packages/redux-saga-fetched/config";

export const getReset = (
  { actionTypePatterns, domain },
) => function* reset(key) {
  const createdKey = createKey(key);
  const isAlreadyReset = yield select(
    (store) => store?.[domain]?.[createKey]?.status === DATA_STATUS_TYPES.reset,
  );
  if (!isAlreadyReset) {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns.reset,
      }),
      payload: {
        createdKey,
      },
    });
  }
};
