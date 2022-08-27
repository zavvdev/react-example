import { themeMiddleware } from "core/store/theme/middleware";
import { combineMiddleware } from "core/store/utils";
import { userApiMiddleware } from "core/store/api/user/middleware";

export const rootMiddleware = combineMiddleware([
  userApiMiddleware,
  themeMiddleware,
]);
