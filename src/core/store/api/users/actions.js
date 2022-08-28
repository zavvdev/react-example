import { createAction } from "@reduxjs/toolkit";
import { USERS_API_ACTION_TYPES } from "core/store/api/users/config";

export const usersApiActions = {
  getAll: createAction(USERS_API_ACTION_TYPES.getAll),
  postOne: createAction(USERS_API_ACTION_TYPES.postOne),
};
