import axios from "axios";
import { HTTP_ENDPOINT } from "core/config/http";
import { createHttpService } from "core/services/HttpService";

const requestInterceptor = {
  fulfilled: (config) => {
    return config;
  },
  error: (error) => {
    return Promise.reject(error);
  },
};

const responseInterceptor = {
  fulfilled: (response) => {
    return response;
  },
  error: (error) => {
    return Promise.reject(error);
  },
};

export const createAxiosInstance = ({
  endpoint,
  interceptors,
}) => {
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

export const http = createHttpService(createAxiosInstance({
  endpoint: HTTP_ENDPOINT,
  interceptors: {
    response: responseInterceptor,
    request: requestInterceptor,
  },
}));
