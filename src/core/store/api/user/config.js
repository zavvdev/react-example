export const USER_API_DOMAIN = "api/user";

export const USER_API_ACTION_TYPES = {
  getAll: {
    request: `${USER_API_DOMAIN}/getAll/request`,
    success: `${USER_API_DOMAIN}/getAll/success`,
    failure: `${USER_API_DOMAIN}/getAll/failure`,
  },
  getById: {
    request: `${USER_API_DOMAIN}/getById/request`,
    success: `${USER_API_DOMAIN}/getById/success`,
    failure: `${USER_API_DOMAIN}/getById/failure`,
  },
};
