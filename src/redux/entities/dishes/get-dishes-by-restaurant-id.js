import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants";
import { selectDishById } from ".";

export const getDishesByRestaurantId = createAsyncThunk(
  "dishes/getDishesByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const { dishes } = selectRestaurantById(getState(), restaurantId) || {};

      if (!dishes?.length) {
        return true;
      }

      for (let dishId of dishes) {
        if (!selectDishById(getState(), dishId)) {
          return true;
        }
      }

      return false;
    },
  }
);
