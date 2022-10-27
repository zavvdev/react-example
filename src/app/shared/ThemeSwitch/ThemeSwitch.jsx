import cx from "clsx";
import PropTypes from "prop-types";
import { useThemeSwitchStyles } from "app/shared/ThemeSwitch/ThemeSwitch.styles";
import { useAppTranslation } from "app/i18n/useAppTranslation";

export function ThemeSwitch({ isDark, onToggle, className }) {
  const { t } = useAppTranslation();
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
