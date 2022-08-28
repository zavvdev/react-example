import PropTypes from "prop-types";
import cx from "clsx";
import { useInputStyles } from "ui/components/Input/Input.styles";

export function Input({
  name,
  placeholder,
  className,
  errorText,
  fullWidth,
  onChange,
  onBlur,
  value,
}) {
  const classes = useInputStyles();
  const inputClasses = cx(classes.input, {
    [classes.inputError]: !!errorText,
    [classes.fullWidth]: fullWidth,
  }, className);

  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {!!errorText && (
        <div className={classes.error}>
          {errorText}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  errorText: PropTypes.string,
  fullWidth: PropTypes.bool,
};

Input.defaultProps = {
  onBlur: undefined,
  placeholder: undefined,
  className: undefined,
  errorText: undefined,
  fullWidth: false,
};
