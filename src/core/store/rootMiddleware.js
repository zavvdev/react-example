import { themeMiddlewareWatcher } from "core/store/entities/theme/middleware";
import { combineMiddleware } from "core/store/combineMiddleware";

export const rootMiddleware = combineMiddleware([
  themeMiddlewareWatcher,
]);
