import "ui/i18n/index";
import "ui/styles/global.css";
import { Router } from "ui/router/Router";
import { StoreProvider } from "ui/providers/StoreProvider";
import { ThemeProvider } from "ui/providers/ThemeProvider";
import { HttpQueryClientProvider } from "ui/providers/HttpQueryClientProvider";

export function App() {
  return (
    <HttpQueryClientProvider>
      <StoreProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </StoreProvider>
    </HttpQueryClientProvider>
  );
}
