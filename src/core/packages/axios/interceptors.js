export const requestInterceptor = {
  fulfilled: (config) => {
    return config;
  },
  error: (error) => {
    return Promise.reject(error);
  },
};

export const responseInterceptor = {
  fulfilled: (response) => {
    return response;
  },
  error: (error) => {
    return Promise.reject(error);
  },
};
