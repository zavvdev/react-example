import axios from "axios";
import { HTTP_ENDPOINT } from "core/config/http";
import { requestInterceptor, responseInterceptor } from "core/packages/axios/interceptors";

const axiosInstance = axios.create({
  baseURL: HTTP_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  requestInterceptor.fulfilled,
  requestInterceptor.error,
);

axiosInstance.interceptors.response.use(
  responseInterceptor.fulfilled,
  responseInterceptor.error,
);

export { axiosInstance };
