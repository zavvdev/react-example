import { createApi } from "@reduxjs/toolkit/query/react";
import { httpQuery } from "app/store/httpQuery";
import { BOOKS_API_TAGS, BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";
import { getAllBooksResponseAdapter } from "books/store/adapters/response";

const booksApi = createApi({
  reducerPath: "booksApi",
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
  reducer: booksApi.reducer,
  reducerName: booksApi.reducerPath,
  middleware: booksApi.middleware,
};
