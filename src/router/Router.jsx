import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { NotFound } from "pages/NotFound/NotFound";
import { GENERAL_ROUTES } from "router/config/generalRoutes";

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
