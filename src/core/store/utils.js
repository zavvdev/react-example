import { all, call, spawn } from "redux-saga/effects";
import { errorTrackingService } from "core/services/ErrorTrackingService";

export const combineMiddleware = (middlewareList) => function* combiner() {
  const getRootGenerator = (middleware) => function* rootGenerator() {
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
