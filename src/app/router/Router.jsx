/*
"This API is currently prefixed as unstable_ because you may unintentionally
add two versions of the history library to your app, the one you have added
to your package.json and whatever version React Router uses internally.
If it is allowed by your tooling, it's recommended to not add history as
a direct dependency and instead rely on the nested dependency from the
react-router package. Once we have a mechanism to detect mis-matched versions,
this API will remove its unstable_ prefix."
https://reactrouter.com/en/v6.3.0/api#unstable_historyrouter
*/
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PropTypes from "prop-types";
import { routerHistory } from "app/router/history";
import { GENERAL_ROUTES } from "app/router/config";
import { BooksPage } from "app/pages/BooksPage";
import { CartPage } from "app/pages/CartPage";
import { OrderPage } from "app/pages/OrderPage";
import { childrenPropType } from "app/propTypes";

export function Router({ children, history }) {
  return (
    <HistoryRouter history={history || routerHistory}>
      {children || (
        <Routes>
          {/* General Routes */}

          <Route path="/" element={<Navigate to={GENERAL_ROUTES.books} />} />
          <Route path={GENERAL_ROUTES.books} element={<BooksPage />} />
          <Route path={GENERAL_ROUTES.cart} element={<CartPage />} />
          <Route path={GENERAL_ROUTES.order} element={<OrderPage />} />

          {/* --------- */}

          <Route path="*" element={<div />} />
        </Routes>
      )}
    </HistoryRouter>
  );
}

Router.propTypes = {
  children: childrenPropType,
  history: PropTypes.shape({}),
};

Router.defaultProps = {
  children: undefined,
  history: undefined,
};
