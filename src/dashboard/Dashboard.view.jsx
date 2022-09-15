import { Button, GENERAL_ROUTES, Typography } from "dashboard/gateway/input";
import { useTranslation } from "react-i18next";
import { useDashboardStyles } from "dashboard/Dashboard.styles";
import { DASHBOARD_I18N_NAMESPACE } from "dashboard/i18n";
import { useNavigate } from "react-router-dom";

export function DashboardView() {
  const classes = useDashboardStyles();
  const { t } = useTranslation(DASHBOARD_I18N_NAMESPACE);
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Typography tag="h1">{t("title")}</Typography>
      <Button onClick={() => navigate(GENERAL_ROUTES.books)}>
        {t("button")}
      </Button>
    </div>
  );
}
