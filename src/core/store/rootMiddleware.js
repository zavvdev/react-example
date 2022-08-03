import { themeMiddlewareWatcher } from "core/store/theme/middleware";
import { combineMiddleware } from "core/store/utils";

export const rootMiddleware = combineMiddleware([
  themeMiddlewareWatcher,
]);
