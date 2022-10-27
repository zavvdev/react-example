import { createApi } from "@reduxjs/toolkit/query/react";
import { httpQuery } from "order/gateway/input";
import { ORDER_API_DOMAIN, ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { postOrderRequestAdapter } from "order/store/adapters/request";

const orderApi = createApi({
  reducerPath: ORDER_API_DOMAIN,
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
  middleware: orderApi.middleware,
  reducer: orderApi.reducer,
  reducerPath: orderApi.reducerPath,
};
