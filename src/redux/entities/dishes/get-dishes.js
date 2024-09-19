import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishesIds } from ".";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dishes");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectDishesIds(getState()).length === 0;
    },
  }
);
