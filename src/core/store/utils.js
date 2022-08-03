/* eslint-disable func-names */
import { all, call, spawn } from "redux-saga/effects";
import { errorTrackingService } from "core/services/ErrorTrackingService";

export const combineMiddleware = (middlewareList) => function* () {
  const getRootGenerator = (middleware) => function* () {
    while (true) {
      try {
        yield call(middleware);
        break;
      } catch (e) {
        errorTrackingService.reportError(e);
      }
    }
  };

  yield all(middlewareList.map((middleware) => {
    return spawn(getRootGenerator(middleware));
  }));
};
