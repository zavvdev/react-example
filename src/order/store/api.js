import { createApi } from "@reduxjs/toolkit/query/react";
import { httpQuery } from "app/store/httpQuery";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { postOrderRequestAdapter } from "order/store/adapters/request";
import { addSuccessOrderMiddleware } from "order/store/middleware";

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: httpQuery,
  endpoints: (build) => ({
    postOrder: build.mutation({
      query: ({ email, books }) => ({
        url: ORDER_HTTP_API_ENDPOINTS.postOrder(),
        method: "POST",
        data: postOrderRequestAdapter({ email, books }),
      }),
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;

export const orderApiSetup = {
  reducer: orderApi.reducer,
  reducerName: orderApi.reducerPath,
  middleware: orderApi.middleware,
};

addSuccessOrderMiddleware(orderApi.endpoints.postOrder.matchFulfilled);
