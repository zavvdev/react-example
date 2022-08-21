// export function apiReducer(state = {}, action = {}) {
//   if (action.type.includes("_request@api")) {
//     return {
//       ...state,
//       [action.type]: {
//         ...state?.[action.type],
//         isLoading: !state?.[action.type]?.data,
//         isFetching: !!state?.[action.type]?.data,
//         isLoaded: false,
//         isError: false,
//       },
//     };
//   }

//   if (action.type.includes("_requestSuccess@api")) {
//     return {
//       ...state,
//       [action.type]: {
//         isLoading: false,
//         isFetching: false,
//         isLoaded: true,
//         isError: false,
//         data: action.payload.data,
//       },
//     };
//   }

//   if (action.type.includes("_requestFailure@api")) {
//     return {
//       ...state,
//       [action.type]: {
//         isLoading: false,
//         isFetching: false,
//         isLoaded: false,
//         isError: true,
//         data: null,
//       },
//     };
//   }

//   return state;
// }

import { createReducer } from "@reduxjs/toolkit";

export const apiReducer = createReducer({
  getUsers: {},
  getUsers2: {},
}, (builder) => {
  builder
    .addCase("api@request", (state, { payload }) => {
      state[payload.key].isLoading = !state[payload.key].data;
      state[payload.key].isFetching = !!state[payload.key].data;
      state[payload.key].isLoaded = false;
      state[payload.key].isError = false;
    })
    .addCase("api@requestSuccess", (state, { payload }) => {
      state[payload.key].isLoading = false;
      state[payload.key].isFetching = false;
      state[payload.key].isLoaded = true;
      state[payload.key].isError = false;
      state[payload.key].data = payload.data;
    })
    .addCase("api@requestFailure", (state, { payload }) => {
      state[payload.key].isLoading = false;
      state[payload.key].isFetching = false;
      state[payload.key].isLoaded = false;
      state[payload.key].isError = true;
      state[payload.key].data = null;
    });
});
