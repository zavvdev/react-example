import { Provider as ReduxProvider } from "react-redux";
import { store } from "core/store/index";
import { childrenPropType } from "ui/propTypes/children";

export function StoreProvider({ children }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
}

StoreProvider.propTypes = {
  children: childrenPropType.isRequired,
};
