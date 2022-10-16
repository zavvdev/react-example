import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppHeaderStyles } from "app/containers/AppHeader/AppHeader.styles";
import { Shared } from "app/shared";
import { I18N_CONFIG } from "app/i18n/config";
import { GENERAL_ROUTES } from "app/router/config";
import { themeActions } from "app/store/theme/domain";
import { themeSelectors } from "app/store/theme/selectors";
import { cartSelectors } from "cart/gateway/output";

export function AppHeader() {
  const dispatch = useDispatch();
  const { t } = useTranslation(I18N_CONFIG.namespace);
  const classes = useAppHeaderStyles();
  const isDarkMode = useSelector(themeSelectors.selectIsDarkMode);
  const cartBooksLength = useSelector(cartSelectors.selectCartBooksLength);

  const handleChangeTheme = () => {
    dispatch(themeActions.toggleDarkMode());
  };

  return (
    <div className={classes.root}>
      <div className={classes.side}>
        <Shared.ThemeSwitch isDark={isDarkMode} onToggle={handleChangeTheme} />
      </div>
      <Link className={classes.logo} to={GENERAL_ROUTES.books}>
        <Shared.Typography tag="span">{t("appName")}</Shared.Typography>
      </Link>
      <div className={classes.side}>
        <Shared.Typography tag="div">
          <Link className={classes.cart} to={GENERAL_ROUTES.cart}>
            {t("appHeader.cart", {
              count: cartBooksLength,
            })}
          </Link>
        </Shared.Typography>
      </div>
    </div>
  );
}
