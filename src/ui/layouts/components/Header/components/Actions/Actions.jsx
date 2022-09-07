import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "core/store/theme/slice";
import { selectIsDarkMode } from "core/store/theme/selectors";
import { APP_LANGUAGES, NAMESPACES } from "ui/i18n/config";
import { ThemeSwitch } from "ui/components/ThemeSwitch/ThemeSwitch";
import { LanguageSwitch } from "ui/components/LanguageSwitch/LanguageSwitch";
import { useActionsStyles } from "ui/layouts/components/Header/components/Actions/Actions.styles";

export function Actions() {
  const dispatch = useDispatch();
  const classes = useActionsStyles();
  const { i18n } = useTranslation(NAMESPACES.common);
  const isDarkMode = useSelector(selectIsDarkMode);

  const languages = Object.values(APP_LANGUAGES);

  const handleLanguageSwitch = (nextLanguage) => {
    i18n.changeLanguage(nextLanguage);
  };

  const handleThemeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={classes.root}>
      <ThemeSwitch
        isDark={isDarkMode}
        onToggle={handleThemeToggle}
        className={classes.themeSwitch}
      />
      <LanguageSwitch
        onLanguageSwitch={handleLanguageSwitch}
        languages={languages}
        currentLanguage={i18n.language}
      />
    </div>
  );
}
