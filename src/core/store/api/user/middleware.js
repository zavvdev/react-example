import {
  all,
  call,
  takeLatest,
} from "redux-saga/effects";
import { USER_API_ACTION_TYPES } from "core/store/api/user/config";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { request } from "packages/redux-saga-fetched";

function* getAllMiddlewareWorker() {
  yield all([
    call(request, {
      keys: ["getUsers"],
      fn: () => http.get(HTTP_API_ENDPOINTS.user.getAll()),
    }),
    call(request, {
      keys: ["getUsers2"],
      fn: () => http.get(HTTP_API_ENDPOINTS.user.getAll()),
    }),
  ]);
}

export function* userApiMiddlewareWatcher() {
  yield takeLatest(
    USER_API_ACTION_TYPES.getAll.request,
    getAllMiddlewareWorker,
  );
}
