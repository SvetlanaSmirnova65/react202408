import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews-by-restaurant-id";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    })
});

export const { selectReviewById } = reviewsSlice.selectors;
