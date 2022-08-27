import { apiSelect } from "core/store/api";

export const selectUserApiGetAllData = (store) => {
  return apiSelect(store, ["getUsers"])?.data;
};

export const selectUserApiGetAllIsLoading = (store) => {
  return apiSelect(store, ["getUsers"])?.isLoading;
};
