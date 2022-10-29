import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartActions, cartSelectors } from "order/gateway/input";
import { usePostOrderMutation } from "order/store/api";

export function useOrder() {
  const dispatch = useDispatch();
  const cartBooks = useSelector(cartSelectors.selectCartBooks);

  const [postOrder, { isLoading, isError, isSuccess }] = usePostOrderMutation();

  const onSubmit = ({ email }) => {
    postOrder({
      email,
      books: cartBooks,
    });
  };

  const bookTitlesToOrder = cartBooks.map((book) => book.title);

  useEffect(() => {
    if (isSuccess && cartBooks.length > 0) {
      dispatch(cartActions.clearBooksCart());
    }
  }, [isSuccess, dispatch, cartBooks.length]);

  return {
    isCartEmpty: cartBooks.length === 0,
    bookTitlesToOrder,
    isLoading,
    isError,
    isSuccess,
    onSubmit,
  };
}
