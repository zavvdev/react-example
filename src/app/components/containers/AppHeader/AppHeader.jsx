import { useAppHeaderStyles } from "app/components/containers/AppHeader/AppHeader.styles";
import { ThemeSwitch } from "app/components/shared/ThemeSwitch/ThemeSwitch";
import { Typography } from "app/components/shared/Typography/Typography";
import { NAMESPACES } from "app/i18n/config";
import { GENERAL_ROUTES } from "app/router/config";
import { selectIsDarkMode } from "app/store/theme/selectors";
import { toggleDarkMode } from "app/store/theme/slice";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function AppHeader() {
  const dispatch = useDispatch();
  const classes = useAppHeaderStyles();
  const isDarkMode = useSelector(selectIsDarkMode);
  const { t } = useTranslation(NAMESPACES.common);

  const handleChangeTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={classes.root}>
      <div className={classes.side}>
        <ThemeSwitch isDark={isDarkMode} onToggle={handleChangeTheme} />
      </div>
      <Link className={classes.logo} to={GENERAL_ROUTES.dashboard}>
        <Typography tag="span">{t("appName")}</Typography>
      </Link>
      <div className={classes.side}>
        <Typography>
          <Link className={classes.cart} to="/">
            {t("appHeader.cart", {
              count: 0,
            })}
          </Link>
        </Typography>
      </div>
    </div>
  );
}