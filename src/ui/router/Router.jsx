import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GENERAL_ROUTES } from "core/config/router";
import { Home } from "ui/pages/Home/Home";
import { NotFound } from "ui/pages/NotFound/NotFound";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* General Routes */}

        <Route path={GENERAL_ROUTES.home} element={<Home />} />

        {/* --------- */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
