import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useOrderStyles } from "order/Order.styles";
import { ORDER_I18N_NAMESPACE } from "order/i18n/config";
import { GENERAL_ROUTES, Shared } from "order/gateway/input";
import { useOrderForm } from "order/hooks/useOrderForm";
import { useOrder } from "order/hooks/useOrder";

export function Order() {
  const { t } = useTranslation(ORDER_I18N_NAMESPACE);
  const classes = useOrderStyles();
  const order = useOrder();
  const orderForm = useOrderForm({ onSubmit: order.onSubmit });

  return (
    <div>
      {order.isCartEmpty ? (
        <div>
          <Shared.Typography>{t("empty")}</Shared.Typography>
          <Shared.Typography tag="div">
            <Link to={GENERAL_ROUTES.books}>{t("selectBooks")}</Link>
          </Shared.Typography>
        </div>
      ) : (
        <div>
          <ul>
            {order.bookTitlesToOrder.map((bootTitle) => (
              <Shared.Typography
                className={classes.li}
                key={bootTitle}
                tag="li"
              >
                {bootTitle}
              </Shared.Typography>
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
