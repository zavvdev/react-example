import axios from "axios";
import { requestInterceptor, responseInterceptor } from "core/api/http/interceptors";

const createAxiosInstance = ({ endpoint }) => {
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

export { createAxiosInstance };
