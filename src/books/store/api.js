import { httpApi } from "app/store/httpApi";
import { BOOKS_HTTP_API_ENDPOINTS } from "books/http/config";
import { BOOKS_API_TAGS } from "books/store/config";

export const booksApi = httpApi.injectEndpoints({
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
