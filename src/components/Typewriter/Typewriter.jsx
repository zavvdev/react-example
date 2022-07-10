import PropTypes from "prop-types";
import { useTypewriterStyles } from "components/Typewriter/Typewriter.styles";

function Typewriter({ children, typeSpeedSec }) {
  const classes = useTypewriterStyles({ typeSpeedSec });

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
}

Typewriter.propTypes = {
  children: PropTypes.node.isRequired,
  typeSpeedSec: PropTypes.number,
};

Typewriter.defaultProps = {
  typeSpeedSec: undefined,
};

export { Typewriter };
