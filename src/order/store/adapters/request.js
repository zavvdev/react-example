export const postOrderRequestAdapter = ({ email, books }) => ({
  order_email: email,
  book_ids: books.map((book) => book.id),
});
