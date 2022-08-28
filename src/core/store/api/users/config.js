const USERS_API_DOMAIN = "api/users";

export const USERS_API_KEYS = {
  getAll: "getAllUsers",
};

export const USERS_API_ACTION_TYPES = {
  getAll: `${USERS_API_DOMAIN}/${USERS_API_KEYS.getAll}`,
};
