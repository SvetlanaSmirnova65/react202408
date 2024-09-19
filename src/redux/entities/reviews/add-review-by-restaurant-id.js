import { createAsyncThunk } from "@reduxjs/toolkit";
import { addReview } from "../restaurants";

export const addReviewByRestaurantId = createAsyncThunk(
  "reviews/addReviewByRestaurantId",
  async ({ restaurantId, review }, { rejectWithValue, dispatch }) => {
    // optimistic UI
    // const id = nanoid();
    // dispatch(addReviewToReviewSlice({ ...review, id }));
    // dispatch(addReview({ headphoneId, reviewId: id }));

    const response = await fetch(
      `http://localhost:3001/api/review/${restaurantId}`,
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const createdReview = await response.json();

    if (!createdReview) {
      return rejectWithValue("empty result");
    }

    // reload reviews
    dispatch(addReview({ restaurantId, reviewId: createdReview.id }));

    return createdReview;
  }
);
