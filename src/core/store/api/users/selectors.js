import { apiSelect } from "core/store/api";
import { USERS_API_KEYS } from "core/store/api/users/config";

export const selectUsersApiGetAllData = (store) => {
  return apiSelect(store, [USERS_API_KEYS.getAll])?.data?.payload;
};

export const selectUsersApiGetAllIsLoading = (store) => {
  return apiSelect(store, [USERS_API_KEYS.getAll])?.isLoading;
};

export const selectUsersApiGetAllIsError = (store) => {
  return apiSelect(store, [USERS_API_KEYS.getAll])?.isError;
};

export const selectUsersApiPostOneIsLoading = (store) => {
  return apiSelect(store, [USERS_API_KEYS.postOne])?.isLoading;
};

export const selectUsersApiPostOneIsLoaded = (store) => {
  return apiSelect(store, [USERS_API_KEYS.postOne])?.isLoaded;
};

export const selectUsersApiPostOneIsError = (store) => {
  return apiSelect(store, [USERS_API_KEYS.postOne])?.isError;
};
