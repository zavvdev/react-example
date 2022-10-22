import { useDispatch, useSelector } from "react-redux";
import { cartSelectors } from "cart/store/selectors";
import { cartActions } from "cart/store/slice";

export function useCart() {
  const dispatch = useDispatch();
  const cartBooks = useSelector(cartSelectors.selectCartBooks);

  const onRemoveBookFromCart = (bookId) => {
    dispatch(cartActions.removeBookFromCart({ bookId }));
  };

  return {
    books: cartBooks,
    isEmpty: cartBooks.length === 0,
    onRemoveBookFromCart,
  };
}
