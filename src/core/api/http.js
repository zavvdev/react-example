import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

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

export const createAxiosInstance = ({ endpoint }) => {
  const instance = axios.create({
    baseURL: endpoint,
  });

  instance.interceptors.request.use(
    requestInterceptor.fulfilled,
    requestInterceptor.error,
  );

  instance.interceptors.response.use(
    responseInterceptor.fulfilled,
    responseInterceptor.error,
  );

  return instance;
};

export const createHttpQueryClient = ({ defaultOptions } = {
  defaultOptions: {},
}) => new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    ...defaultOptions,
  },
});
