import { useTranslation } from "react-i18next";
import { Typewriter } from "components/Typewriter/Typewriter";
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
        <Typewriter>
          <p>{t("description")}</p>
        </Typewriter>
      </div>
    </MainLayout>
  );
}
