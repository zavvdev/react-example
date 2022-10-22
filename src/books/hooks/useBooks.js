import { useDispatch, useSelector } from "react-redux";
import { useGetAllBooksQuery } from "books/store/api";
import { cartActions, cartSelectors } from "books/gateway/input";

export function useBooks() {
  const dispatch = useDispatch();
  const getAllBooksQuery = useGetAllBooksQuery();
  const cartBooks = useSelector(cartSelectors.selectCartBooks);

  const onAddToCart = (book) => {
    dispatch(
      cartActions.addBookToCart({
        book,
      }),
    );
  };

  const onRemoveFromCart = (bookId) => {
    dispatch(
      cartActions.removeBookFromCart({
        bookId,
      }),
    );
  };

  const getIsBookInCart = (bookId) => {
    return cartBooks.findIndex((cartBook) => cartBook.id === bookId) !== -1;
  };

  return {
    data: getAllBooksQuery.data,
    isSuccess: getAllBooksQuery.isSuccess,
    isLoading: getAllBooksQuery.isLoading,
    isError: getAllBooksQuery.isError,
    onAddToCart,
    onRemoveFromCart,
    getIsBookInCart,
  };
}
