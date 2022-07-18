import { useTranslation } from "react-i18next";
import { Typography } from "ui/components/Typography/Typography";
import { NAMESPACES } from "ui/i18n/config";
import { MainLayout } from "ui/layouts/MainLayout/MainLayout";
import { useHomeStyles } from "ui/pages/Home/Home.styles";

export function Home() {
  const { t } = useTranslation([NAMESPACES.home, NAMESPACES.common]);
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
