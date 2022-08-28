import { themeMiddleware } from "core/store/theme/middleware";
import { combineMiddleware } from "core/store/utils";
import { usersApiMiddleware } from "core/store/api/users/middleware";

export const rootMiddleware = combineMiddleware([
  usersApiMiddleware,
  themeMiddleware,
]);
