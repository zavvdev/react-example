import { createApi } from "@reduxjs/toolkit/query/react";
import { HTTP_CONFIG } from "app/http/config";
import { errorTrackingService } from "app/services/ErrorTrackingService";
import { http } from "app/http";

export const HTTP_API_DOMAIN = "httpApi";

const createHttpBaseQuery = ({ baseUrl }) => {
  return async ({ url, method, data, params }) => {
    try {
      const result = await http.call({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (error) {
      errorTrackingService.reportError(error);
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
};

export const httpApi = createApi({
  reducerPath: HTTP_API_DOMAIN,
  baseQuery: createHttpBaseQuery({
    baseUrl: HTTP_CONFIG.endpoint,
  }),
  endpoints: () => ({}),
});
