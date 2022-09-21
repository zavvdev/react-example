import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GENERAL_ROUTES, Shared } from "dashboard/gateway/input";
import { DASHBOARD_I18N_NAMESPACE } from "dashboard/i18n/config";
import { useDashboardStyles } from "dashboard/Dashboard.styles";

export function Dashboard() {
  const { t } = useTranslation(DASHBOARD_I18N_NAMESPACE);
  const navigate = useNavigate();
  const classes = useDashboardStyles();

  return (
    <div className={classes.root}>
      <Shared.Typography tag="h1">{t("title")}</Shared.Typography>
      <Shared.Button onClick={() => navigate(GENERAL_ROUTES.books)}>
        {t("button")}
      </Shared.Button>
    </div>
  );
}
