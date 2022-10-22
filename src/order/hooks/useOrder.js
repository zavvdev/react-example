import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  cartActions,
  cartSelectors,
  GENERAL_ROUTES,
} from "order/gateway/input";
import { usePostOrderMutation } from "order/store/api";
import { ORDER_I18N_NAMESPACE } from "order/i18n/config";

export function useOrder() {
  const { t } = useTranslation(ORDER_I18N_NAMESPACE);
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
