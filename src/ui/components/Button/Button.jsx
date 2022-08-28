import cx from "clsx";
import PropTypes from "prop-types";
import { childrenPropType } from "ui/propTypes/children";
import { useButtonStyles } from "ui/components/Button/Button.styles";

export function Button({
  children,
  className,
  onClick,
  disabled,
  icon,
  fullWidth,
}) {
  const classes = useButtonStyles();

  const rootClasses = cx(classes.root, {
    [classes.disabled]: disabled,
    [classes.fullWidth]: fullWidth,
  }, className);

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {icon && <div className={classes.icon}>{icon}</div>}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: childrenPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  icon: undefined,
  fullWidth: false,
};
