import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedUsers.map((item) => item.id),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

export const { selectUserById } = usersSlice.selectors;