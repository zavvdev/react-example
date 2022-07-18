import PropTypes from "prop-types";
import cx from "clsx";
import { MoonIcon } from "ui/components/svgIcons/MoonIcon";
import { SunIcon } from "ui/components/svgIcons/SunIcon";
import { useThemeSwitchStyles } from "ui/components/ThemeSwitch/ThemeSwitch.styles";

export function ThemeSwitch({ isDark, onToggle, className }) {
  const classes = useThemeSwitchStyles();

  const rootClasses = cx(classes.root, className);

  const switcherClasses = cx(classes.switcher, {
    [classes.switcherDark]: isDark,
  });

  return (
    <button type="button" className={rootClasses} onClick={onToggle}>
      <div className={switcherClasses}>
        {isDark ? <MoonIcon /> : <SunIcon />}
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
