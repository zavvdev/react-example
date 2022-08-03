import { QueryClientProvider as ReactQueryProvider } from "@tanstack/react-query";
import { queryClient } from "core/api/queryClient";
import { childrenPropType } from "ui/propTypes/children";

export function QueryClientProvider({ children }) {
  return (
    <ReactQueryProvider client={queryClient}>
      {children}
    </ReactQueryProvider>
  );
}

QueryClientProvider.propTypes = {
  children: childrenPropType.isRequired,
};
