import { useSelector } from "react-redux";
import { cartSelectors } from "order/gateway/input";
import { usePostOrderMutation } from "order/store/api";

export function useOrder() {
  const cartBooks = useSelector(cartSelectors.selectCartBooks);

  const [postOrder, { isLoading, isError, isSuccess }] = usePostOrderMutation();

  const onSubmit = ({ email }) => {
    postOrder({
      email,
      books: cartBooks,
    });
  };

  const bookTitlesToOrder = cartBooks.map((book) => book.title);

  return {
    isCartEmpty: cartBooks.length === 0,
    bookTitlesToOrder,
    isLoading,
    isError,
    isSuccess,
    onSubmit,
  };
}
