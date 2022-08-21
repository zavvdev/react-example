export const HTTP_ENDPOINT = process.env.REACT_APP_HTTP_ENDPOINT;

export const HTTP_API_ENDPOINTS = {
  user: {
    getUsers: () => "/users",
    getUserById: (userId) => `/users/${userId}`,
  },
};
