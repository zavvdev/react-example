import { booksApiSetup } from "books/gateway/output";
import { orderApiSetup } from "order/gateway/output";

export const rootApiMiddleware = [
  booksApiSetup.middleware,
  orderApiSetup.middleware,
];
