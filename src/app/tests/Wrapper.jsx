import PropTypes from "prop-types";
import { App } from "app/App";
import { childrenPropType } from "app/propTypes";
import { configureStore } from "app/store";

export function Wrapper({ children, initialStoreState, styling, history }) {
  return (
    <App
      store={configureStore({ initialState: initialStoreState })}
      styling={styling}
      history={history}
    >
      {children}
    </App>
  );
}

Wrapper.propTypes = {
  children: childrenPropType.isRequired,
  initialStoreState: PropTypes.shape({}),
  styling: PropTypes.shape({
    theme: PropTypes.shape({}),
    generateId: PropTypes.func,
  }),
  history: PropTypes.shape({}),
};

Wrapper.defaultProps = {
  initialStoreState: undefined,
  styling: undefined,
  history: undefined,
};
