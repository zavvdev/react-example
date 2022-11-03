import { APP_CONFIG } from "app/config";
import { errorTrackingService } from "app/services/ErrorTrackingService";
import { httpService } from "app/services/HttpService";

const createHttpQuery = ({ baseUrl }) => {
  return async ({ url, method, data, params }) => {
    try {
      const result = await httpService.call({
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
  baseUrl: APP_CONFIG.httpEndpoint,
});
