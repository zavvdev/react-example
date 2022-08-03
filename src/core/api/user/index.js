import { HTTP_API_ENDPOINTS } from "core/config/http";
import { httpApi } from "core/api";

const endpoints = HTTP_API_ENDPOINTS.user;

class UserApi {
  constructor(httpService) {
    this.repository = httpService;
  }

  async getUsers() {
    return this.repository.get(endpoints.getUsers());
  }
}

export const userApi = new UserApi(httpApi);
