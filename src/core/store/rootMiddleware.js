import { createListenerMiddleware } from "@reduxjs/toolkit";
import { themeMiddleware } from "core/store/theme/middleware";

export const rootMiddleware = createListenerMiddleware();

[themeMiddleware].forEach(rootMiddleware.startListening);
