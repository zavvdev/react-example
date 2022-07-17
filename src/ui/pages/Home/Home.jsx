import { useTranslation } from "react-i18next";
import { Typography } from "ui/components/Typography/Typography";
import { namespaces } from "ui/i18n/namespaces";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";
import { useHomeStyles } from "ui/pages/Home/Home.styles";

export function Home() {
  const { t } = useTranslation([namespaces.home, namespaces.common]);
  const classes = useHomeStyles();

  return (
    <MainLayout>
      <div className={classes.root}>
        <Typography tag="h1">{t("title")}</Typography>
        <Typography>{t("description")}</Typography>
      </div>
    </MainLayout>
  );
}
