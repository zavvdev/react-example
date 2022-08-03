import { HTTP_API_ENDPOINTS } from "core/config/http";
import { http } from "core/api/http";

const endpoints = HTTP_API_ENDPOINTS.user;

class UserApi {
  constructor(httpApiInstance) {
    this.http = httpApiInstance;
  }

  async getUsers() {
    return this.http.get(endpoints.getUsers());
  }
}

export const userApi = new UserApi(http);
