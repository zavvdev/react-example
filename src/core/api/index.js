import { HTTP_ENDPOINT } from "core/config/http";
import { createAxiosInstance, createHttpQueryClient } from "core/api/http";
import { createHttpService } from "core/services/HttpService";

export const httpApi = createHttpService(createAxiosInstance({
  endpoint: HTTP_ENDPOINT,
}));

export const httpQueryClient = createHttpQueryClient();
