const USERS_API_DOMAIN = "api/users";

export const USERS_API_KEYS = {
  getAll: "getAllUsers",
  postOne: "postOneUser",
};

export const USERS_API_ACTION_TYPES = {
  getAll: `${USERS_API_DOMAIN}/${USERS_API_KEYS.getAll}`,
  postOne: `${USERS_API_DOMAIN}/${USERS_API_KEYS.postOne}`,
};
