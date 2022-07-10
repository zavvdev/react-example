import { useTranslation } from "react-i18next";
import { namespaces } from "i18n/namespaces";
import { MainLayout } from "layouts/MainLayout/MainLayout";
import { useHomeStyles } from "pages/Home/Home.styles";

export function Home() {
  const { t } = useTranslation([namespaces.home, namespaces.common]);
  const classes = useHomeStyles();

  return (
    <MainLayout>
      <div className={classes.root}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </MainLayout>
  );
}
