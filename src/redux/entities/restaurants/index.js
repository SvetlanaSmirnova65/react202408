import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  selectors: {    
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantsIds: (state) => state.ids,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
    reducers: {
      addReview: (state, { payload: { restaurantId, reviewId } }) => {
        state.entities[restaurantId].reviews?.push(reviewId);
      },
    },
  });

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantsSlice.selectors;
export const { addReview } = restaurantsSlice.actions;
