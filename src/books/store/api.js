import { httpApi } from "books/gateway/input";
import { BOOKS_API_TAGS, BOOKS_HTTP_API_ENDPOINTS } from "books/store/config";

const getAllBooksResponseAdapter = (response) =>
  response.map((book) => ({
    id: book?.id,
    title: book?.title,
    author: book?.author_fullname,
    date: book?.publish_date,
    price: book?.price,
    cover: book?.cover_url,
  }));

const booksApi = httpApi.injectEndpoints({
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
