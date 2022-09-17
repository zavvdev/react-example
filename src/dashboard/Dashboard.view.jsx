import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button, GENERAL_ROUTES, Typography } from "dashboard/gateway/input";
import { DASHBOARD_I18N_NAMESPACE } from "dashboard/i18n";
import { useDashboardStyles } from "dashboard/Dashboard.styles";

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
