import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GENERAL_ROUTES } from "app/router/config";
import { Dashboard } from "app/pages/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Routes */}

        <Route path={GENERAL_ROUTES.dashboard} element={<Dashboard />} />

        {/* --------- */}

        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}
