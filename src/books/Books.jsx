import { useAppTranslation } from "app/i18n/useAppTranslation";
import { BooksContainers } from "books/containers";
import { useBooks } from "books/hooks/useBooks";

export function Books() {
  const { t } = useAppTranslation();
  const books = useBooks();

  return (
    <div>
      {books.isSuccess &&
        books.data.map((book) => (
          <BooksContainers.BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            date={book.date}
            price={book.price}
            cover={book.cover}
            onAddToCart={() => books.onAddToCart(book)}
            onRemoveFromCart={() => books.onRemoveFromCart(book.id)}
            isInCart={books.getIsBookInCart(book.id)}
          />
        ))}
      {books.isLoading && <p>{t("labels.loading")}</p>}
      {books.isError && <p>{t("errors.unexpected")}</p>}
    </div>
  );
}
