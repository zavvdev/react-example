import {
  call,
  takeLatest,
} from "redux-saga/effects";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { apiMutation, apiQuery } from "core/store/api";
import { USERS_API_ACTION_TYPES, USERS_API_KEYS } from "core/store/api/users/config";

function* getAll() {
  yield call(apiQuery, {
    key: [USERS_API_KEYS.getAll],
    fn: () => http.get(HTTP_API_ENDPOINTS.users.getAll()),
  });
}

function* postOne(action) {
  const { payload } = action;
  yield call(apiMutation, {
    key: [USERS_API_KEYS.postOne],
    fn: () => http.post(HTTP_API_ENDPOINTS.users.postOne(), {
      name: payload?.name,
      email: payload?.email,
      company: payload?.company,
      role: payload?.role,
    }),
    options: {
      invalidateKeys: [
        [USERS_API_KEYS.getAll],
      ],
    },
  });
  yield call(getAll);
}

export function* usersApiMiddleware() {
  yield takeLatest(
    USERS_API_ACTION_TYPES.getAll,
    getAll,
  );
  yield takeLatest(
    USERS_API_ACTION_TYPES.postOne,
    postOne,
  );
}
