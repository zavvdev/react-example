import { httpApi } from "core/store/api/http";
import { HTTP_API_ENDPOINTS, HTTP_METHODS } from "core/config/http";
import { USERS_API_TAGS } from "core/store/api/users/config";

export const usersApi = httpApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => HTTP_API_ENDPOINTS.users.getAll(),
      providesTags: [USERS_API_TAGS.getAll],
    }),
    postOneUser: build.mutation({
      query({
        name, email, company, role,
      }) {
        return {
          url: HTTP_API_ENDPOINTS.users.postOne(),
          method: HTTP_METHODS.post,
          body: {
            name,
            email,
            company,
            role,
          },
        };
      },
      invalidatesTags: [USERS_API_TAGS.getAll],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  usePostOneUserMutation,
} = usersApi;
