import { createListenerMiddleware } from "@reduxjs/toolkit";
import { themeMiddlewares } from "app/store/theme/middleware";

const listenerMiddleware = createListenerMiddleware();

[...themeMiddlewares].forEach((middleware) => {
  listenerMiddleware.startListening(middleware);
});

export { listenerMiddleware };
