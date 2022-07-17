import "ui/i18n/index";
import "ui/styles/global.css";
import { Router } from "ui/router/Router";
import { StoreProvider } from "ui/providers/StoreProvider";
import { ThemeProvider } from "ui/providers/ThemeProvider";

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}
