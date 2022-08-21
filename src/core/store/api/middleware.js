import {
  call, put, select,
} from "redux-saga/effects";

export function* request({
  key, fn, options = {
    useCache: true,
  },
}) {
  const { useCache } = options;
  try {
    const cachedData = yield select((store) => store?.[key]?.data);
    if (useCache && cachedData) {
      return;
    }
    yield put({
      type: "api@request",
      payload: {
        key,
      },
    });
    const data = yield call(fn);
    yield put({
      type: "api@requestSuccess",
      payload: {
        data,
        key,
      },
    });
  } catch (e) {
    yield put({
      type: "api@requestFailure",
      payload: {
        key,
      },
    });
    throw e;
  }
}

// export function* requestWatcher() {
//   yield takeLatest("REQUEST", requestWorker);
// }
