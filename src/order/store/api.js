import { createApi } from "@reduxjs/toolkit/query/react";
import { httpQuery } from "app/store/httpQuery";
import { listenerMiddleware } from "app/store/listenerMiddleware";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";
import { postOrderRequestAdapter } from "order/store/adapters/request";
import { cartActions, cartSelectors } from "order/gateway/input";

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

listenerMiddleware.startListening({
  predicate: orderApi.endpoints.postOrder.matchFulfilled,
  effect: (_, listenerApi) => {
    const cartBooks = cartSelectors.selectCartBooks(listenerApi.getState());
    if (cartBooks.length > 0) {
      listenerApi.dispatch(cartActions.clearBooksCart());
    }
  },
});

export const { usePostOrderMutation } = orderApi;

export const orderApiSetup = {
  reducer: orderApi.reducer,
  reducerName: orderApi.reducerPath,
  middleware: orderApi.middleware,
};
