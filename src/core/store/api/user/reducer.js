import { createReducer } from "@reduxjs/toolkit";
import { STORE_API_DEFAULT_STATE } from "core/config/store";
import { userApiActions } from "core/store/api/user/actions";

const initialUserApiState = {
  getAll: STORE_API_DEFAULT_STATE,
  getById: [],
};

export const userApiReducer = createReducer(initialUserApiState, (builder) => {
  builder

  // getAll

    .addCase(userApiActions.getAll.request, (state) => {
      state.getAll.isLoading = true;
      state.getAll.isLoaded = false;
      state.getAll.isError = false;
    })
    .addCase(userApiActions.getAll.success, (state, { payload }) => {
      state.getAll.isLoading = false;
      state.getAll.isLoaded = true;
      state.getAll.isError = false;
      state.getAll.data = payload.data;
    })
    .addCase(userApiActions.getAll.failure, (state) => {
      state.getAll.isLoading = false;
      state.getAll.isLoaded = false;
      state.getAll.isError = true;
      state.getAll.data = STORE_API_DEFAULT_STATE.data;
    })

  // getById

    .addCase(userApiActions.getById.request, (state, { payload }) => {
      state.getById[payload.id].isLoading = true;
      state.getById[payload.id].isLoaded = false;
      state.getById[payload.id].isError = false;
    })
    .addCase(userApiActions.getById.success, (state, { payload }) => {
      state.getById[payload.id].isLoading = false;
      state.getById[payload.id].isLoaded = true;
      state.getById[payload.id].isError = false;
      state.getById[payload.id].data = payload.data;
    })
    .addCase(userApiActions.getById.failure, (state, { payload }) => {
      state.getById[payload.id].isLoading = false;
      state.getById[payload.id].isLoaded = false;
      state.getById[payload.id].isError = true;
      state.getById[payload.id].data = STORE_API_DEFAULT_STATE.data;
    });
});
