import { httpResponseAdapter } from "core/services/HttpService/adapters";

class HttpService {
  constructor(axiosInstanceApi) {
    this.repository = axiosInstanceApi;
  }

  async get(url, config) {
    const responsePayload = await this.repository.get(url, config);
    return httpResponseAdapter(responsePayload);
  }

  async post(url, data, config) {
    const responsePayload = await this.repository.post(url, data, config);
    return httpResponseAdapter(responsePayload);
  }

  async put(url, data, config) {
    const responsePayload = await this.repository.put(url, data, config);
    return httpResponseAdapter(responsePayload);
  }

  async patch(url, data, config) {
    const responsePayload = await this.repository.patch(url, data, config);
    return httpResponseAdapter(responsePayload);
  }

  async delete(url, config) {
    const responsePayload = await this.repository.delete(url, config);
    return httpResponseAdapter(responsePayload);
  }
}

export const createHttpService = (axiosInstance) => {
  return new HttpService(axiosInstance);
};
