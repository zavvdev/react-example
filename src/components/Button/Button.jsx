import cx from "clsx";
import PropTypes from "prop-types";
import { useButtonStyles } from "components/Button/Button.styles";
import { childrenPropType } from "propTypes/children";

export function Button({
  children,
  className,
  onClick,
  disabled,
  icon,
}) {
  const classes = useButtonStyles();

  const rootClasses = cx(classes.root, {
    [classes.disabled]: disabled,
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
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  icon: undefined,
};
