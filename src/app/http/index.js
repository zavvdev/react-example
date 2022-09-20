import axios from "axios";
import { HTTP_CONFIG } from "app/http/config";
import { requestInterceptor, responseInterceptor } from "app/http/interceptors";
import { createHttpService } from "app/services/HttpService";

const createAxiosInstance = ({ endpoint, interceptors }) => {
  const instance = axios.create({
    baseURL: endpoint,
  });

  instance.interceptors.request.use(
    interceptors.request.fulfilled,
    interceptors.request.error,
  );

  instance.interceptors.response.use(
    interceptors.response.fulfilled,
    interceptors.response.error,
  );

  return instance;
};

export const http = createHttpService(
  createAxiosInstance({
    endpoint: HTTP_CONFIG.endpoint,
    interceptors: {
      response: responseInterceptor,
      request: requestInterceptor,
    },
  }),
);
