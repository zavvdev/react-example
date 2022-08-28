import {
  call,
  takeLatest,
} from "redux-saga/effects";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { apiQuery } from "core/store/api";
import { USER_API_ACTION_TYPES, USER_API_KEYS } from "core/store/api/user/config";

function* getAllMiddleware() {
  yield call(apiQuery, {
    key: [USER_API_KEYS.getAll],
    fn: () => http.get(HTTP_API_ENDPOINTS.user.getAll()),
  });
}

function* getByIdMiddleware(action) {
  const { payload } = action;
  const userId = payload?.id;
  if (userId) {
    yield call(apiQuery, {
      key: [USER_API_KEYS.getUserById, userId],
      fn: () => http.get(HTTP_API_ENDPOINTS.user.getById(userId)),
    });
  }
}

export function* userApiMiddleware() {
  yield takeLatest(
    USER_API_ACTION_TYPES.getAll,
    getAllMiddleware,
  );
  yield takeLatest(
    USER_API_ACTION_TYPES.getById,
    getByIdMiddleware,
  );
}
