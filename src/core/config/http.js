export const HTTP_ENDPOINT = process.env.REACT_APP_HTTP_ENDPOINT;

export const HTTP_METHODS = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export const HTTP_API_ENDPOINTS = {
  users: {
    getAll: () => "/users",
    postOne: () => "/users",
    deleteOneById: (userId) => `/users/${userId}`,
  },
};
