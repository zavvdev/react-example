import { put } from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";

export const getInvalidate = ({
  actionTypePatterns,
}) => function* invalidate(key) {
  const createdKey = createKey(key);
  yield put({
    type: createActionType({
      createdKey,
      actionTypePattern: actionTypePatterns.invalidate,
    }),
    payload: {
      createdKey,
    },
  });
};
