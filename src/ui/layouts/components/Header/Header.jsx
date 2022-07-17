import { useTranslation } from "react-i18next";
import { APP_LANGUAGES } from "core/config/i18n";
import { LanguageSwitch } from "ui/components/LanguageSwitch/LanguageSwitch";
import { LogoIcon } from "ui/components/svgIcons/LogoIcon";
import { ThemeSwitch } from "ui/components/ThemeSwitch/ThemeSwitch";
import { namespaces } from "ui/i18n/namespaces";
import { useHeaderStyles } from "ui/layouts/components/Header/Header.styles";

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
      <ThemeSwitch />
      <LanguageSwitch
        onLanguageSwitch={handleLanguageSwitch}
        languages={languages}
        currentLanguage={i18n.language}
      />
    </div>
  );
}
