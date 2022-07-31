import { HTTP_ENDPOINT } from "core/config/http";
import { createAxiosInstance } from "core/api/http";
import { createHttpService } from "core/services/HttpService";
import { createHttpQueryClient } from "core/api/http/queryClient";

export const httpApi = createHttpService(createAxiosInstance({
  endpoint: HTTP_ENDPOINT,
}));

export const httpQueryClient = createHttpQueryClient();
