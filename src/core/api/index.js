import { HTTP_ENDPOINT } from "core/config/http";
import { createAxiosInstance } from "core/api/axios";
import { createHttpService } from "core/services/HttpService";

export const httpApi = createHttpService(createAxiosInstance({
  endpoint: HTTP_ENDPOINT,
}));
