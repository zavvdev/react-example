import { httpApi } from "core/store/httpApi";
import { HTTP_API_ENDPOINTS, HTTP_METHODS } from "core/config/http";

export const USERS_API_TAGS = {
  getAll: "getAllUsers",
};

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
    deleteOneUserById: build.mutation({
      query({
        userId,
      }) {
        return {
          url: HTTP_API_ENDPOINTS.users.deleteOneById(userId),
          method: HTTP_METHODS.delete,
        };
      },
      invalidatesTags: [USERS_API_TAGS.getAll],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  usePostOneUserMutation,
  useDeleteOneUserByIdMutation,
} = usersApi;
