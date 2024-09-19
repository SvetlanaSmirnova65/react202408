import { getDishesByRestaurantId } from "../../redux/entities/dishes/get-dishes-by-restaurant-id";
import { useRequest } from "../../redux/hooks/use-request";
import { Dish } from "../dish/dish";

export const Menu = ({dishesIds, restaurantId}) => {
  const requestStatus = useRequest(getDishesByRestaurantId, restaurantId);

  const isLoading = requestStatus === "pending";

  const isError = requestStatus === "rejected";

  if (isLoading) {
    return <div>Меню загружается...</div>;
  }

  if (isError) {
    return <div>Ошибка при загрузке меню!</div>;
  }

    return (
      <ul>
        {dishesIds?.map((id) => (
          <li key={id}><Dish id={id}/></li>
      ))}
      </ul>
    );
  };