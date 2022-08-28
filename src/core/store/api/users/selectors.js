import { apiSelect } from "core/store/api";
import { USERS_API_KEYS } from "core/store/api/users/config";

export const selectUsersApiGetAllData = (store) => {
  return apiSelect(store, [USERS_API_KEYS.getAll])?.data;
};

export const selectUsersApiGetAllIsLoading = (store) => {
  return apiSelect(store, [USERS_API_KEYS.getAll])?.isLoading;
};
