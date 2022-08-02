import { useQuery } from "react-query";
import { HTTP_API_ENDPOINTS, HTTP_QUERY_KEYS } from "core/config/http";
import { httpApi } from "core/api";

export const createGetUsersQueryKey = () => {
  return HTTP_QUERY_KEYS.user.getUsers;
};

export const useGetUsersQuery = (options = {}) => {
  const getUsersQuery = useQuery(
    createGetUsersQueryKey(),
    () => httpApi.get(HTTP_API_ENDPOINTS.user.getUsers()),
    options,
  );
  return getUsersQuery;
};
