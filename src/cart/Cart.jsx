import { Link, useNavigate } from "react-router-dom";
import { GENERAL_ROUTES } from "app/router/config";
import { Shared } from "app/shared";
import { CartShared } from "cart/shared";
import { useCartStyles } from "cart/Cart.styles";
import { useCart } from "cart/hooks/useCart";
import { useCartTranslation } from "cart/i18n/useCartTranslation";

export function Cart() {
  const { t } = useCartTranslation();
  const navigate = useNavigate();
  const classes = useCartStyles();
  const cart = useCart();

  return (
    <div>
      {cart.isEmpty ? (
        <>
          <p>{t("empty")}</p>
          <p>
            <Link to={GENERAL_ROUTES.books}>{t("addBooks")}</Link>
          </p>
        </>
      ) : (
        <div>
          <div className={classes.selectMore}>
            <Link to={GENERAL_ROUTES.books}>{t("selectMore")}</Link>
          </div>
          {cart.books.map((book) => (
            <CartShared.CartBook
              key={book.id}
              cover={book.cover}
              title={book.title}
              author={book.author}
              price={book.price}
              onRemoveFromCart={() => cart.onRemoveBookFromCart(book.id)}
            />
          ))}
          <Shared.Button
            fullWidth
            onClick={() => navigate(GENERAL_ROUTES.order)}
          >
            {t("order")}
          </Shared.Button>
        </div>
      )}
    </div>
  );
}
