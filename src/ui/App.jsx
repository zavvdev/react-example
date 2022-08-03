import "ui/i18n/index";
import "ui/styles/global.css";
import { Router } from "ui/router/Router";
import { StoreProvider } from "ui/providers/StoreProvider";
import { ThemeProvider } from "ui/providers/ThemeProvider";
import { QueryClientProvider } from "ui/providers/QueryClientProvider";

export function App() {
  return (
    <QueryClientProvider>
      <StoreProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
