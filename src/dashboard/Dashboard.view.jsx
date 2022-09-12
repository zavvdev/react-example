import { MainLayout } from "app/layouts/MainLayout/MainLayout";
import { Typography } from "app/components/shared/Typography/Typography";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "app/i18n/config";
import { useDashboardStyles } from "dashboard/Dashboard.styles";
import { Button } from "app/components/shared/Button/Button";

export function Dashboard() {
  const classes = useDashboardStyles();
  const { t } = useTranslation(NAMESPACES.dashboard);

  return (
    <MainLayout>
      <div className={classes.root}>
        <Typography tag="h1">{t("title")}</Typography>
        <Button>{t("button")}</Button>
      </div>
    </MainLayout>
  );
}
