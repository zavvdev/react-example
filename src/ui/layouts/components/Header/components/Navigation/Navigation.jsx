import cx from "clsx";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { GENERAL_ROUTES } from "core/config/router";
import { NAMESPACES } from "ui/i18n/config";
import { useNavigationStyles } from "ui/layouts/components/Header/components/Navigation/Navigation.styles";
import { Typography } from "ui/components/Typography/Typography";

export function Navigation() {
  const { t } = useTranslation(NAMESPACES.common);
  const classes = useNavigationStyles();
  const { pathname } = useLocation();

  const routes = [
    {
      path: GENERAL_ROUTES.home,
      label: t("navigation.home"),
      className: cx(classes.navItem, {
        [classes.navItemActive]: pathname === GENERAL_ROUTES.home,
      }),
    },
    {
      path: GENERAL_ROUTES.users,
      label: t("navigation.users"),
      className: cx(classes.navItem, {
        [classes.navItemActive]: pathname === GENERAL_ROUTES.users,
      }),
    },
  ];

  return (
    <div className={classes.root}>
      {routes.map((route) => (
        <Typography key={route.path} className={route.className}>
          <Link to={route.path}>
            {route.label}
          </Link>
        </Typography>
      ))}
    </div>
  );
}
