import { booksApi } from "books/gateway/output";
import { orderApi } from "order/gateway/output";

export const rootApiMiddleware = [booksApi.middleware, orderApi.middleware];
