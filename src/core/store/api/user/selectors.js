import { USER_API_DOMAIN } from "core/store/api/user/config";

export const selectAllUsers = (store) => {
  return store[USER_API_DOMAIN].getAll.data;
};

export const selectIsAllUsersLoading = (store) => {
  return store[USER_API_DOMAIN].getAll.isLoading;
};
