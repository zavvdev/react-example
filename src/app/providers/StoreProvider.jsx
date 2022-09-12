import { Provider as ReduxProvider } from "react-redux";
import { store } from "app/store/index";
import { childrenPropType } from "app/propTypes/children";

export function StoreProvider({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

StoreProvider.propTypes = {
  children: childrenPropType.isRequired,
};