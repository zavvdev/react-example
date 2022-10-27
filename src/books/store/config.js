const BOOKS_STORE_DOMAIN = "books";
export const BOOKS_API_DOMAIN = "booksApi";

export const BOOKS_API_TAGS = {
  getAllBooks: `${BOOKS_STORE_DOMAIN}/getAllBooks`,
};

export const BOOKS_HTTP_API_ENDPOINTS = {
  getAllBooks: () => "/books",
};
