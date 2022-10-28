import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GENERAL_ROUTES } from "app/router/config";
import { cartActions, cartSelectors } from "order/gateway/input";
import { usePostOrderMutation } from "order/store/api";
import { useOrderTranslation } from "order/i18n/useOrderTranslation";

export function useOrder() {
  const { t } = useOrderTranslation();
  const navigate = useNavigate();
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
    if (isError) {
      // eslint-disable-next-line no-alert
      alert(t("orderError"));
    }
  }, [isError, t]);

  useEffect(() => {
    if (isSuccess) {
      // eslint-disable-next-line no-alert
      alert(t("orderSuccess"));
      dispatch(cartActions.clearBooksCart());
      navigate(GENERAL_ROUTES.books);
    }
  }, [dispatch, isSuccess, navigate, t]);

  return {
    isCartEmpty: cartBooks.length === 0,
    bookTitlesToOrder,
    isLoading,
    onSubmit,
  };
}
