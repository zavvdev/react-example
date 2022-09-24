import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { cartSelectors } from "cart/store/selectors";
import { cartActions } from "cart/store/domain";
import { GENERAL_ROUTES, Shared } from "cart/gateway/input";
import { CartContainers } from "cart/containers";
import { CART_I18N_NAMESPACE } from "cart/i18n/config";
import { useCartStyles } from "cart/Cart.styles";

export function Cart() {
  const { t } = useTranslation(CART_I18N_NAMESPACE);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartBooks = useSelector(cartSelectors.selectCartBooks);
  const classes = useCartStyles();

  return (
    <div>
      {cartBooks.length > 0 ? (
        <div>
          <Shared.Typography tag="div" className={classes.selectMore}>
            <Link to={GENERAL_ROUTES.books}>{t("selectMore")}</Link>
          </Shared.Typography>
          {cartBooks.map((book) => (
            <CartContainers.CartBook
              key={book.id}
              cover={book.cover}
              title={book.title}
              author={book.author}
              price={book.price}
              onRemoveFromCart={() => {
                dispatch(cartActions.removeBookFromCart({ bookId: book.id }));
              }}
            />
          ))}
        </div>
      ) : (
        <>
          <Shared.Typography>{t("empty")}</Shared.Typography>
          <Shared.Typography>
            <Link to={GENERAL_ROUTES.books}>{t("addBooks")}</Link>
          </Shared.Typography>
        </>
      )}
      {cartBooks.length > 0 && (
        <Shared.Button fullWidth onClick={() => navigate(GENERAL_ROUTES.order)}>
          {t("order")}
        </Shared.Button>
      )}
    </div>
  );
}
