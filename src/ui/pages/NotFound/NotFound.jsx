import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GENERAL_ROUTES } from "core/config/router";
import { Button } from "ui/components/Button/Button";
import { Typography } from "ui/components/Typography/Typography";
import { namespaces } from "ui/i18n/namespaces";
import { useNotFoundStyles } from "ui/pages/NotFound/NotFound.styles";

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
      <Typography tag="span">{t("code")}</Typography>
      <Typography tag="h1">{t("text")}</Typography>
      <Button className={classes.btn} onClick={handleHomeClick}>
        {t("buttons.home")}
      </Button>
    </div>
  );
}
