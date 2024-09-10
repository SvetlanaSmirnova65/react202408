import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants";
import { Tab } from "../tab/tab";

export const RestaurantTab = ({ restaurantId, onClick, isActive }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Tab title={restaurant.name} onClick={onClick} isActive={isActive} />;
};
