import { put } from "redux-saga/effects";
import { composeActionType, composeKey } from "packages/redux-saga-fetched/utils";

export const getInvalidate = ({
  actionTypePatterns,
}) => function* invalidate(keys) {
  const key = composeKey(keys);
  yield put({
    type: composeActionType({
      key,
      actionTypePattern: actionTypePatterns.invalidate,
    }),
    payload: {
      key,
    },
  });
};
