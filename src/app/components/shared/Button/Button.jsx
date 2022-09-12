import cx from "clsx";
import PropTypes from "prop-types";
import { childrenPropType } from "app/propTypes/children";
import { useButtonStyles } from "app/components/shared/Button/Button.styles";

export function Button({ children, className, onClick, disabled }) {
  const classes = useButtonStyles();

  const rootClasses = cx(
    classes.root,
    {
      [classes.disabled]: disabled,
    },
    className,
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: childrenPropType.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
};
