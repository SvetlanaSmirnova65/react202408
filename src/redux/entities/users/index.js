import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsersIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },

  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    })
});

export const { selectUserById, selectUsersIds, selectRequestStatus } = usersSlice.selectors;