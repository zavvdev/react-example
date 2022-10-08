import { Provider as ReduxProvider } from "react-redux";
import PropTypes from "prop-types";
import { store } from "app/store";
import { childrenPropType } from "app/propTypes";

export function StoreProvider({ children, store: store_ }) {
  return <ReduxProvider store={store_ || store}>{children}</ReduxProvider>;
}

StoreProvider.propTypes = {
  children: childrenPropType.isRequired,
  store: PropTypes.shape({}),
};

StoreProvider.defaultProps = {
  store: undefined,
};
