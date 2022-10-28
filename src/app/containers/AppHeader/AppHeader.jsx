import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppHeaderStyles } from "app/containers/AppHeader/AppHeader.styles";
import { GENERAL_ROUTES } from "app/router/config";
import { useAppTranslation } from "app/i18n/useAppTranslation";
import { cartSelectors } from "cart/gateway/output";

export function AppHeader() {
  const { t } = useAppTranslation();
  const classes = useAppHeaderStyles();
  const cartBooksLength = useSelector(cartSelectors.selectCartBooksLength);

  return (
    <div className={classes.root}>
      <Link className={classes.logo} to={GENERAL_ROUTES.books}>
        <span>{t("appName")}</span>
      </Link>
      <Link to={GENERAL_ROUTES.cart}>
        {t("appHeader.cart", {
          count: cartBooksLength,
        })}
      </Link>
    </div>
  );
}
