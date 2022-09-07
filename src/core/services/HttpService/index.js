class HttpService {
  constructor(axiosInstanceApi) {
    this.repository = axiosInstanceApi;
  }

  async call({
    url, method, data, params,
  }) {
    return this.repository({
      url,
      method,
      data,
      params,
    });
  }

  async get(url, config) {
    return this.repository.get(url, config);
  }

  async post(url, data, config) {
    return this.repository.post(url, data, config);
  }

  async put(url, data, config) {
    return this.repository.put(url, data, config);
  }

  async patch(url, data, config) {
    return this.repository.patch(url, data, config);
  }

  async delete(url, config) {
    return this.repository.delete(url, config);
  }
}

export const createHttpService = (axiosInstance) => {
  return new HttpService(axiosInstance);
};
