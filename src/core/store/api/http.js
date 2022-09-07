import { createApi } from "@reduxjs/toolkit/query/react";
import { HTTP_API_DOMAIN } from "core/store/api/config";
import { HTTP_ENDPOINT } from "core/config/http";
import { http } from "core/http";

const createHttpBaseQuery = ({ baseUrl } = { baseUrl: "" }) => {
  return async ({
    url, method, data, params,
  }) => {
    try {
      const result = await http.call({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (error) {
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
    baseUrl: HTTP_ENDPOINT,
  }),
  endpoints: () => ({}),
});
