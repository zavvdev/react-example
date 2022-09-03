import { createListenerMiddleware } from "@reduxjs/toolkit";
import { themeMiddleware } from "core/store/theme/middleware";

export const rootMiddleware = createListenerMiddleware();

const middlewareList = [
  themeMiddleware,
];

middlewareList.forEach((middleware) => {
  rootMiddleware.startListening(middleware);
});
