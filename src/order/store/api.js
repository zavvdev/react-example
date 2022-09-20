import { httpApi } from "order/gateway/input";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";

const orderApi = httpApi.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation({
      query: ({ email, books }) => ({
        url: ORDER_HTTP_API_ENDPOINTS.postOrder(),
        method: "POST",
        data: {
          email,
          books,
        },
      }),
    }),
  }),
});

export const { usePostOrderMutation } = orderApi;
