import cx from "clsx";
import PropTypes from "prop-types";
import { useTypographyStyles } from "components/Typography/Typography.styles";
import { childrenPropType } from "propTypes/children";

function Typography({ children, tag, className }) {
  const classes = useTypographyStyles();

  const Root = tag || "p";
  const rootClasses = cx(classes.root, className);

  return (
    <Root className={rootClasses}>
      {children}
    </Root>
  );
}

Typography.propTypes = {
  children: childrenPropType.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
};

Typography.defaultProps = {
  tag: undefined,
  className: undefined,
};

export { Typography };
