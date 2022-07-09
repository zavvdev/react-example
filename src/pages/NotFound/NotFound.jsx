import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Button/Button";
import { namespaces } from "i18n/namespaces";
import { useNotFoundStyles } from "pages/NotFound/NotFound.styles";
import { GENERAL_ROUTES } from "router/config/routes/generalRoutes";

export function NotFound() {
  const classes = useNotFoundStyles();
  const navigate = useNavigate();
  const { t } = useTranslation(namespaces.notFound);

  const handleHomeClick = () => {
    navigate(GENERAL_ROUTES.home, {
      replace: true,
    });
  };

  return (
    <div className={classes.root}>
      <span>{t("code")}</span>
      <h1>{t("text")}</h1>
      <Button className={classes.btn} onClick={handleHomeClick}>
        {t("buttons.home")}
      </Button>
    </div>
  );
}
