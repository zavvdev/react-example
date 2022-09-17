import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BookItem } from "books/components/containers/BookItem/BookItem";
import {
  addBookToCart,
  I18N_NAMESPACES,
  removeBookFromCart,
  selectCartBooks,
  Typography,
} from "books/gateway/input";
import { useGetAllBooksQuery } from "books/store/api";

export function BooksView() {
  const dispatch = useDispatch();
  const { t } = useTranslation(I18N_NAMESPACES.common);
  const { data: books, isLoading, isError, isSuccess } = useGetAllBooksQuery();
  const cartBooks = useSelector(selectCartBooks);

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
            onAddToCart={() =>
              dispatch(
                addBookToCart({
                  book,
                }),
              )
            }
            onRemoveFromCart={() => {
              dispatch(
                removeBookFromCart({
                  bookId: book.id,
                }),
              );
            }}
            isInCart={
              cartBooks.findIndex((cartBook) => cartBook.id === book.id) !== -1
            }
          />
        ))}
      {isLoading && <Typography>{t("labels.loading")}</Typography>}
      {isError && <Typography>{t("errors.unexpected")}</Typography>}
    </div>
  );
}
