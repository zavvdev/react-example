import { createAction } from "@reduxjs/toolkit";
import { USER_API_ACTION_TYPES } from "core/store/api/user/config";

export const userApiActions = {
  getAll: createAction(USER_API_ACTION_TYPES.getAll),
  getById: createAction(USER_API_ACTION_TYPES.getById),
};
