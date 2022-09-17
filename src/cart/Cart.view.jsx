import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { selectCartBooks } from "cart/store/selectors";
import { removeBookFromCart } from "cart/store/slice";
import { Button, GENERAL_ROUTES, Typography } from "cart/gateway/input";
import { CartBook } from "cart/components/containers/CartBook/CartBook";
import { CART_I18N_NAMESPACE } from "cart/i18n";
import { useCartStyles } from "cart/Cart.styles";

export function CartView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartBooks = useSelector(selectCartBooks);
  const { t } = useTranslation(CART_I18N_NAMESPACE);
  const classes = useCartStyles();

  return (
    <div>
      {cartBooks.length > 0 ? (
        <div>
          <Typography tag="div" className={classes.selectMore}>
            <Link to={GENERAL_ROUTES.books}>{t("selectMore")}</Link>
          </Typography>
          {cartBooks.map((book) => (
            <CartBook
              key={book.id}
              cover={book.cover}
              title={book.title}
              author={book.author}
              price={book.price}
              onRemoveFromCart={() => {
                dispatch(removeBookFromCart({ bookId: book.id }));
              }}
            />
          ))}
        </div>
      ) : (
        <>
          <Typography>{t("empty")}</Typography>
          <Typography>
            <Link to={GENERAL_ROUTES.books}>{t("addBooks")}</Link>
          </Typography>
        </>
      )}
      {cartBooks.length > 0 && (
        <Button fullWidth onClick={() => navigate(GENERAL_ROUTES.order)}>
          {t("order")}
        </Button>
      )}
    </div>
  );
}
