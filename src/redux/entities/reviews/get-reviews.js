import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewsIds } from ".";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/reviews");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectReviewsIds(getState()).length === 0;
    },
  }
);
