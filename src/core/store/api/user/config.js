const USER_API_DOMAIN = "api/user";

export const USER_API_KEYS = {
  getAll: "getAllUsers",
  getUserById: "getUserById",
};

export const USER_API_ACTION_TYPES = {
  getAll: `${USER_API_DOMAIN}/${USER_API_KEYS.getAll}`,
  getById: `${USER_API_DOMAIN}/${USER_API_KEYS.getUserById}`,
};
