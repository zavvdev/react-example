import { httpApi } from "books/gateway/input";
import { BOOKS_API_TAGS, BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";

const booksApi = httpApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => ({
        url: BOOKS_HTTP_API_ENDPOINTS.getAllBooks(),
      }),
      providesTags: [BOOKS_API_TAGS.getAllBooks],
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;
