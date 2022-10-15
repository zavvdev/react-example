import PropTypes from "prop-types";
import cx from "clsx";
import { useInputStyles } from "app/shared/Input/Input.styles";

export function Input({
  type,
  name,
  placeholder,
  className,
  errorText,
  onChange,
  onBlur,
  value,
}) {
  const classes = useInputStyles();
  const inputClasses = cx(
    classes.input,
    {
      [classes.inputError]: Boolean(errorText),
    },
    className,
  );

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {Boolean(errorText) && <div className={classes.error}>{errorText}</div>}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
};

Input.defaultProps = {
  onBlur: undefined,
  placeholder: undefined,
  className: undefined,
  errorText: undefined,
};
