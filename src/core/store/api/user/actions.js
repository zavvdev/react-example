import { createAction } from "@reduxjs/toolkit";
import { USER_API_ACTION_TYPES } from "core/store/api/user/config";

export const userApiActions = {
  getAll: {
    request: createAction(USER_API_ACTION_TYPES.getAll.request),
    success: createAction(USER_API_ACTION_TYPES.getAll.success),
    failure: createAction(USER_API_ACTION_TYPES.getAll.failure),
  },
  getById: {
    request: createAction(USER_API_ACTION_TYPES.getById.request),
    success: createAction(USER_API_ACTION_TYPES.getById.success),
    failure: createAction(USER_API_ACTION_TYPES.getById.failure),
  },
};
