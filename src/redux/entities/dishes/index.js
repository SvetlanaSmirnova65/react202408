import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getDishesByRestaurantId } from "./get-dishes-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "menu",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectDishById } = dishesSlice.selectors;
