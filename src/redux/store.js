import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants";
import { dishesSlice } from "./entities/dishes";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { requestSlice } from "./ui/request/request";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
});
