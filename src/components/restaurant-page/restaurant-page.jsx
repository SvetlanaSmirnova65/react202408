import {useState} from "react";
import { Restaurant } from "../restaurant/restaurant";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants";
import { RestaurantTab } from "../restaurant-tab/restaurant-tab";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../redux/hooks/use-request";

export const RestaurantPage = ({ title }) => {
  const requestStatus = useRequest(getRestaurants);

  const restaurantsIds = useSelector(selectRestaurantsIds);
  

  const [activeRestaurantId, setActiveRestaurantId] = useState(null);

  const handleSetActiveRestaurantId = (id) => {
    if (activeRestaurantId === id) {
      return;
    }
    setActiveRestaurantId(id);
  }
  
  const isLoading = requestStatus === "idle" || requestStatus === "pending";
  const isError = requestStatus === "rejected";

  if (isLoading) {
    return "loading...";
  }

  if (isError) {
    return "error";
  }

  return (
    <div>
      <h1>{title}</h1>

      {restaurantsIds.map((id) => (
        <RestaurantTab
          key={id}
          restaurantId={id}
          onClick={() => handleSetActiveRestaurantId(id)}
          isActive={id === activeRestaurantId}
        />
      ))}

      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}

    </div>
  );
};