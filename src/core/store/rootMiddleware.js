import { themeMiddlewareWatcher } from "core/store/theme/middleware";
import { combineMiddleware } from "core/store/utils";
import { userApiMiddlewareWatcher } from "core/store/api/user/middleware";

export const rootMiddleware = combineMiddleware([
  userApiMiddlewareWatcher,
  themeMiddlewareWatcher,
]);
