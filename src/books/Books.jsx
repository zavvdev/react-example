import { useTranslation } from "react-i18next";
import { BooksContainers } from "books/containers";
import { I18N_CONFIG, Shared } from "books/gateway/input";
import { useBooks } from "books/hooks/useBooks";

export function Books() {
  const { t } = useTranslation(I18N_CONFIG.namespace);
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
      {books.isLoading && (
        <Shared.Typography>{t("labels.loading")}</Shared.Typography>
      )}
      {books.isError && (
        <Shared.Typography>{t("errors.unexpected")}</Shared.Typography>
      )}
    </div>
  );
}
