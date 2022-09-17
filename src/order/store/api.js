import { HTTP_METHODS, httpApi } from "order/gateway/input";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";

export const orderApi = httpApi.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation({
      query: ({ email, books }) => ({
        url: ORDER_HTTP_API_ENDPOINTS.postOrder(),
        method: HTTP_METHODS.post,
        data: {
          email,
          books,
        },
      }),
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;
