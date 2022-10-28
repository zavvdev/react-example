import { Link } from "react-router-dom";
import { useOrderStyles } from "order/Order.styles";
import { GENERAL_ROUTES, Shared } from "order/gateway/input";
import { useOrderForm } from "order/hooks/useOrderForm";
import { useOrder } from "order/hooks/useOrder";
import { useOrderTranslation } from "order/i18n/useOrderTranslation";

export function Order() {
  const { t } = useOrderTranslation();
  const classes = useOrderStyles();
  const order = useOrder();
  const orderForm = useOrderForm({ onSubmit: order.onSubmit });

  return (
    <div>
      {order.isCartEmpty ? (
        <div>
          <p>{t("empty")}</p>
          <div>
            <Link to={GENERAL_ROUTES.books}>{t("selectBooks")}</Link>
          </div>
        </div>
      ) : (
        <div>
          <ul>
            {order.bookTitlesToOrder.map((bootTitle) => (
              <li className={classes.li} key={bootTitle}>
                {bootTitle}
              </li>
            ))}
          </ul>
          <div className={classes.formWrap}>
            <Shared.Input
              type="email"
              name="email"
              value={orderForm.values.email}
              placeholder={t("email")}
              onChange={orderForm.handleChange}
              onBlur={orderForm.handleBlur}
              errorText={orderForm.getFieldError("email")}
            />
            <Shared.Button
              disabled={!orderForm.isValid || order.isLoading}
              onClick={orderForm.handleSubmit}
            >
              {order.isLoading ? t("submitting") : t("submit")}
            </Shared.Button>
          </div>
        </div>
      )}
    </div>
  );
}
