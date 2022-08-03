import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = ({ defaultOptions } = {
  defaultOptions: {},
}) => new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    ...defaultOptions,
  },
});

export const queryClient = createQueryClient();
