import { createApi } from "@reduxjs/toolkit/query/react";
import { httpQuery } from "books/gateway/input";
import {
  BOOKS_API_DOMAIN,
  BOOKS_API_TAGS,
  BOOKS_HTTP_API_ENDPOINTS,
} from "books/store/config";
import { getAllBooksResponseAdapter } from "books/store/adapters/response";

const booksApi = createApi({
  reducerPath: BOOKS_API_DOMAIN,
  baseQuery: httpQuery,
  tagTypes: [BOOKS_API_TAGS.getAllBooks],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => ({
        url: BOOKS_HTTP_API_ENDPOINTS.getAllBooks(),
      }),
      providesTags: [BOOKS_API_TAGS.getAllBooks],
      transformResponse: (response) => {
        return getAllBooksResponseAdapter(response);
      },
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;

export const booksApiSetup = {
  middleware: booksApi.middleware,
  reducer: booksApi.reducer,
  reducerPath: booksApi.reducerPath,
};
