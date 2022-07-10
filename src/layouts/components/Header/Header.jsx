import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "components/LanguageSwitch/LanguageSwitch";
import { LogoIcon } from "components/svgIcons/LogoIcon";
import { namespaces } from "i18n/namespaces";
import { APP_LANGUAGES } from "i18n/config";
import { useHeaderStyles } from "layouts/components/Header/Header.styles";

export function Header() {
  const classes = useHeaderStyles();
  const { i18n } = useTranslation(namespaces.common);
  const languages = Object.values(APP_LANGUAGES);

  const handleLanguageSwitch = (nextLanguage) => {
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className={classes.root}>
      <LogoIcon className={classes.logo} />
      <LanguageSwitch
        onLanguageSwitch={handleLanguageSwitch}
        languages={languages}
        currentLanguage={i18n.language}
      />
    </div>
  );
}
