import axios from "axios";
import { HTTP_ENDPOINT } from "app/http/config";
import { createHttpService } from "app/services/HttpService";
import { requestInterceptor, responseInterceptor } from "app/http/interceptors";

export const createAxiosInstance = ({ endpoint, interceptors }) => {
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
    endpoint: HTTP_ENDPOINT,
    interceptors: {
      response: responseInterceptor,
      request: requestInterceptor,
    },
  }),
);
