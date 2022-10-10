import PropTypes from "prop-types";
import { App } from "app/App";
import { childrenPropType } from "app/propTypes";
import { configureStore } from "app/store";

export function TestWrapper({ children, initialStoreState, styling, history }) {
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

TestWrapper.propTypes = {
  children: childrenPropType.isRequired,
  initialStoreState: PropTypes.shape({}),
  styling: PropTypes.shape({
    theme: PropTypes.shape({}),
    generateId: PropTypes.func,
  }),
  history: PropTypes.shape({}),
};

TestWrapper.defaultProps = {
  initialStoreState: undefined,
  styling: undefined,
  history: undefined,
};
