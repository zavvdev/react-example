import axios from "axios";
import { HTTP_CONFIG } from "app/http/config";
import { createHttpService } from "app/services/HttpService";

const createAxiosInstance = ({ endpoint }) => {
  return axios.create({
    baseURL: endpoint,
  });
};

export const http = createHttpService(
  createAxiosInstance({
    endpoint: HTTP_CONFIG.endpoint,
  }),
);
