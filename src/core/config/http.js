export const HTTP_ENDPOINT = process.env.REACT_APP_HTTP_ENDPOINT;

export const HTTP_QUERY_KEYS = {
  user: {
    getUsers: "user/getUsers",
  },
};

export const HTTP_API_ENDPOINTS = {
  user: {
    getUsers: () => "/users",
  },
};
