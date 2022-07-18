import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { APP_LANGUAGES } from "core/config/i18n";
import { selectThemeMode } from "core/store/entities/theme/selectors";
import { THEME_MODE_TYPES } from "core/store/entities/theme/config";
import { themeActions } from "core/store/entities/theme/slice";
import { NAMESPACES } from "ui/i18n/config";
import { ThemeSwitch } from "ui/components/ThemeSwitch/ThemeSwitch";
import { LanguageSwitch } from "ui/components/LanguageSwitch/LanguageSwitch";
import { useActionsStyles } from "ui/layouts/components/Header/components/Actions/Actions.styles";

export function Actions() {
  const dispatch = useDispatch();
  const classes = useActionsStyles();

  const { i18n } = useTranslation(NAMESPACES.common);
  const languages = Object.values(APP_LANGUAGES);

  const themeMode = useSelector(selectThemeMode);

  const handleLanguageSwitch = (nextLanguage) => {
    i18n.changeLanguage(nextLanguage);
  };

  const handleThemeToggle = () => {
    const nextThemeMode = themeMode === THEME_MODE_TYPES.dark
      ? THEME_MODE_TYPES.light
      : THEME_MODE_TYPES.dark;
    dispatch(themeActions.setThemeMode({
      mode: nextThemeMode,
    }));
  };

  return (
    <div className={classes.root}>
      <ThemeSwitch
        isDark={themeMode === THEME_MODE_TYPES.dark}
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
