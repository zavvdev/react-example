import { QueryClientProvider } from "@tanstack/react-query";
import { httpQueryClient } from "core/api";
import { childrenPropType } from "ui/propTypes/children";

export function HttpQueryClientProvider({ children }) {
  return (
    <QueryClientProvider client={httpQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

HttpQueryClientProvider.propTypes = {
  children: childrenPropType.isRequired,
};
