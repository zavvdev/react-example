import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GENERAL_ROUTES } from "app/router/config";
import { BooksPage } from "app/pages/BooksPage";
import { DashboardPage } from "app/pages/DashboardPage";
import { CartPage } from "app/pages/CartPage";
import { OrderPage } from "app/pages/OrderPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Routes */}

        <Route path={GENERAL_ROUTES.dashboard} element={<DashboardPage />} />
        <Route path={GENERAL_ROUTES.books} element={<BooksPage />} />
        <Route path={GENERAL_ROUTES.cart} element={<CartPage />} />
        <Route path={GENERAL_ROUTES.order} element={<OrderPage />} />

        {/* --------- */}

        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}
