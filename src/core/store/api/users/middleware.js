import {
  call,
  put,
  takeLeading,
} from "redux-saga/effects";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { apiMutation, apiQuery } from "core/store/api";
import { USERS_API_ACTION_TYPES, USERS_API_KEYS } from "core/store/api/users/config";
import { usersApiActions } from "core/store/api/users/actions";

function* getAll({ payload }) {
  yield call(apiQuery, {
    key: [USERS_API_KEYS.getAll],
    fn: () => http.get(HTTP_API_ENDPOINTS.users.getAll()),
    options: {
      useCache: !payload?.refetch,
    },
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
  yield put(usersApiActions.getAll());
}

export function* usersApiMiddleware() {
  yield takeLeading(
    USERS_API_ACTION_TYPES.getAll,
    getAll,
  );
  yield takeLeading(
    USERS_API_ACTION_TYPES.postOne,
    postOne,
  );
}
