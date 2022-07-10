import { Provider as ReduxProvider } from "react-redux";
import { childrenPropType } from "propTypes/children";
import { store } from "store/index";

function Provider({ children }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
}

Provider.propTypes = {
  children: childrenPropType.isRequired,
};

export { Provider };
