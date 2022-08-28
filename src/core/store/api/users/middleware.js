import {
  call,
  takeLatest,
} from "redux-saga/effects";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { apiQuery } from "core/store/api";
import { USERS_API_ACTION_TYPES, USERS_API_KEYS } from "core/store/api/users/config";

function* getAllMiddleware() {
  yield call(apiQuery, {
    key: [USERS_API_KEYS.getAll],
    fn: () => http.get(HTTP_API_ENDPOINTS.users.getAll()),
  });
}

export function* usersApiMiddleware() {
  yield takeLatest(
    USERS_API_ACTION_TYPES.getAll,
    getAllMiddleware,
  );
}
