import cx from "clsx";
import PropTypes from "prop-types";
import { useButtonStyles } from "components/Button/Button.styles";
import { childrenPropType } from "propTypes/children";

export function Button({
  children,
  className,
  onClick,
  disabled,
  href,
  target,
  icon,
}) {
  const classes = useButtonStyles();

  const rootClasses = cx(classes.root, {
    [classes.disabled]: disabled,
  }, className);

  const renderIcon = () => {
    if (icon) {
      return <div className={classes.icon}>{icon}</div>;
    }
    return null;
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={rootClasses}
      >
        {renderIcon()}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {renderIcon()}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: childrenPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  target: PropTypes.oneOf(["_blank"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  target: undefined,
  className: undefined,
  disabled: false,
  href: undefined,
  icon: undefined,
};
