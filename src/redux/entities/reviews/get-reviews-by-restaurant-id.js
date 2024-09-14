import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants";
import { selectReviewById } from ".";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const { reviews } = selectRestaurantById(getState(), restaurantId) || {};

      if (!reviews?.length) {
        return true;
      }

      for (let reviewId of reviews) {
        const review = selectReviewById(getState(), reviewId);
        if (!review) {
          return true;
        }
      }

      return false;
    },
  }
);
