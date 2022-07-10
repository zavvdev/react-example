import "i18n";
import "styles/index.css";
import { Router } from "router/Router";
import { Provider as StoreProvider } from "store/Provider";
import { Provider as ThemeProvider } from "styles/theme/Provider";

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>

  );
}
