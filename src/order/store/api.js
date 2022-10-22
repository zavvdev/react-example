import { httpApi } from "order/gateway/input";
import { ORDER_HTTP_API_ENDPOINTS } from "order/store/config";

const postOrderRequestAdapter = ({ email, books }) => ({
  order_email: email,
  book_ids: books.map((book) => book.id),
});

const orderApi = httpApi.injectEndpoints({
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
