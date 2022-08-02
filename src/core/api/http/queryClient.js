import { QueryClient } from "react-query";

export const createHttpQueryClient = ({ defaultOptions } = {
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
