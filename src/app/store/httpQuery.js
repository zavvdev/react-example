import { HTTP_CONFIG } from "app/http/config";
import { errorTrackingService } from "app/services/ErrorTrackingService";
import { http } from "app/http";

const createHttpQuery = ({ baseUrl }) => {
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
      if (process.env.NODE_ENV !== "test") {
        errorTrackingService.reportError(error);
      }
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };
};

export const httpQuery = createHttpQuery({
  baseUrl: HTTP_CONFIG.endpoint,
});
