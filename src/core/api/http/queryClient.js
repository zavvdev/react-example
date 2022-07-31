import { QueryClient } from "react-query";

export const createHttpQueryClient = ({ defaultOptions } = {
  defaultOptions: {},
}) => new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    ...defaultOptions,
  },
});
