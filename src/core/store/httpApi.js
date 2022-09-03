import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HTTP_ENDPOINT } from "core/config/http";

export const HTTP_API_DOMAIN = "httpApi";

const httpBaseQuery = fetchBaseQuery({
  baseUrl: HTTP_ENDPOINT,
});

export const httpApi = createApi({
  reducerPath: HTTP_API_DOMAIN,
  baseQuery: httpBaseQuery,
  endpoints: () => ({}),
});
