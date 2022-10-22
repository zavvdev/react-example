import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { GENERAL_ROUTES, Shared } from "cart/gateway/input";
import { CartContainers } from "cart/containers";
import { CART_I18N_NAMESPACE } from "cart/i18n/config";
import { useCartStyles } from "cart/Cart.styles";
import { useCart } from "cart/hooks/useCart";

export function Cart() {
  const { t } = useTranslation(CART_I18N_NAMESPACE);
  const navigate = useNavigate();
  const classes = useCartStyles();
  const cart = useCart();

  return (
    <div>
      {cart.isEmpty ? (
        <>
          <Shared.Typography>{t("empty")}</Shared.Typography>
          <Shared.Typography>
            <Link to={GENERAL_ROUTES.books}>{t("addBooks")}</Link>
          </Shared.Typography>
        </>
      ) : (
        <div>
          <Shared.Typography tag="div" className={classes.selectMore}>
            <Link to={GENERAL_ROUTES.books}>{t("selectMore")}</Link>
          </Shared.Typography>
          {cart.books.map((book) => (
            <CartContainers.CartBook
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
