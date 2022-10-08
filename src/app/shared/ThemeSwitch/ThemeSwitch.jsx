import cx from "clsx";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useThemeSwitchStyles } from "app/shared/ThemeSwitch/ThemeSwitch.styles";
import { I18N_CONFIG } from "app/i18n/config";

export function ThemeSwitch({ isDark, onToggle, className }) {
  const { t } = useTranslation(I18N_CONFIG.namespace);
  const classes = useThemeSwitchStyles();
  const rootClasses = cx(classes.root, className);

  const switcherClasses = cx(classes.switcher, {
    [classes.switcherDark]: isDark,
  });

  return (
    <button type="button" className={rootClasses} onClick={onToggle}>
      <div className={switcherClasses}>
        {isDark ? t("themeSwitch.dark") : t("themeSwitch.light")}
      </div>
    </button>
  );
}

ThemeSwitch.propTypes = {
  isDark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ThemeSwitch.defaultProps = {
  className: undefined,
};
