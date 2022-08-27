import { apiSelect } from "core/store/api";
import { USER_API_KEYS } from "core/store/api/user/config";

export const selectUserApiGetAllData = (store) => {
  return apiSelect(store, [USER_API_KEYS.getAll])?.data;
};

export const selectUserApiGetAllIsLoading = (store) => {
  return apiSelect(store, [USER_API_KEYS.getAll])?.isLoading;
};
