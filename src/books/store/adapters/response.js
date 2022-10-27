export const getAllBooksResponseAdapter = (response) =>
  response.map((book) => ({
    id: book?.id,
    title: book?.title,
    author: book?.author_fullname,
    date: book?.publish_date,
    price: book?.price,
    cover: book?.cover_url,
  }));
