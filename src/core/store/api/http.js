import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { HTTP_ENDPOINT } from "core/config/http";

export const HTTP_API_DOMAIN = "httpApi";

const httpBaseQuery = fetchBaseQuery({
  baseUrl: HTTP_ENDPOINT,
});

const httpBaseQueryWithRetry = retry(httpBaseQuery, { maxRetries: 5 });

export const httpApi = createApi({
  reducerPath: HTTP_API_DOMAIN,
  baseQuery: httpBaseQueryWithRetry,
  endpoints: () => ({}),
});
