import {
  call, put, select, takeLatest,
} from "redux-saga/effects";
import { USER_API_ACTION_TYPES } from "core/store/api/user/config";
import { userApiActions } from "core/store/api/user/actions";
import { http } from "core/api/http";
import { HTTP_API_ENDPOINTS } from "core/config/http";
import { selectAllUsers } from "core/store/api/user/selectors";

const getAll = async () => http.get(HTTP_API_ENDPOINTS.user.getAll());

function* getAllMiddlewareWorker() {
  try {
    let users = yield select(selectAllUsers);
    if (!users) {
      const { payload } = yield call(getAll);
      users = payload;
    }
    yield put(userApiActions.getAll.success({ data: users }));
  } catch (e) {
    yield put(userApiActions.getAll.failure());
    throw e;
  }
}

export function* userApiMiddlewareWatcher() {
  yield takeLatest(
    USER_API_ACTION_TYPES.getAll.request,
    getAllMiddlewareWorker,
  );
}
