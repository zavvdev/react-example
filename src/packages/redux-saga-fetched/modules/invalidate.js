import { put, select } from "redux-saga/effects";
import { createActionType, createKey } from "packages/redux-saga-fetched/utils";
import { EFFECT_TYPES } from "packages/redux-saga-fetched/config";

export const getInvalidate = ({
  actionTypePatterns,
  domain,
}) => function* invalidate(key) {
  const createdKey = createKey(key);
  const isAlreadyInvalidated = yield select(
    (store) => store?.[domain]?.[createKey]?.isValid,
  );
  if (!isAlreadyInvalidated) {
    yield put({
      type: createActionType({
        createdKey,
        actionTypePattern: actionTypePatterns[EFFECT_TYPES.query].invalidate,
      }),
      payload: {
        createdKey,
      },
    });
  }
};
