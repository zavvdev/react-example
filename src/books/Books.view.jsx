import { I18N_NAMESPACES, Typography } from "books/gateway/input";
import { useGetAllBooksQuery } from "books/store/api";
import { BookItem } from "books/components/containers/BookItem/BookItem";
import { useTranslation } from "react-i18next";

export function BooksView() {
  const { t } = useTranslation(I18N_NAMESPACES.common);
  const { data: books, isLoading, isError, isSuccess } = useGetAllBooksQuery();

  return (
    <div>
      {isSuccess &&
        books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            date={book.date}
            price={book.price}
            cover={book.cover}
            onAddToCart={() => {}}
            onRemoveFromCart={() => {}}
            isInCart={false}
          />
        ))}
      {isLoading && <Typography>{t("labels.loading")}</Typography>}
      {isError && <Typography>{t("errors.unexpected")}</Typography>}
    </div>
  );
}
