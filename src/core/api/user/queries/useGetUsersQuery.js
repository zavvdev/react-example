import { useQuery } from "@tanstack/react-query";
import { HTTP_QUERY_KEYS } from "core/config/http";
import { userApi } from "core/api/user";

export const createGetUsersQueryKey = () => {
  return [HTTP_QUERY_KEYS.user.getUsers];
};

export const useGetUsersQuery = (options = {}) => {
  const getUsersQuery = useQuery(
    createGetUsersQueryKey(),
    () => userApi.getUsers(),
    options,
  );
  return getUsersQuery;
};
