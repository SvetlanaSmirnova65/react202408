import { useSelector } from "react-redux";
import { useAuth } from "../auth-context/use-auth";
import { Menu } from "../menu/menu";
import { Reviews } from "../reviews/reviews";
import { selectRestaurantById } from "../../redux/entities/restaurants";

export const Restaurant = ({ restaurantId }) => {
  const { auth } = useAuth();
  const restaurant = useSelector((state) =>
      selectRestaurantById(state, restaurantId)
  );
  const { name, menu: dishesIds, reviews: reviewsIds } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Меню</h3>
      {dishesIds.length ? <Menu dishesIds={dishesIds} /> : <div>Нет меню</div>}  
      <h3>Отзывы</h3>
      {reviewsIds.length ? <Reviews auth={auth} reviewsIds={reviewsIds} restaurantId={restaurantId}/> : <div>Нет отзывов</div>}
    </section>
  );
};