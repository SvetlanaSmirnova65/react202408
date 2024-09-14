import { useSelector } from "react-redux";
import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";
import { selectDishById } from "../../redux/entities/dishes";

export const Dish = ({id }) => {
    const { auth, userLogin } = useAuth();
    const { isAuthorized, userName } = auth;

    const dish = useSelector((state) => selectDishById(state, id));

    const { name, price } = dish || {};

    if (!name) {
      return null;
    }

    return (
        <>
            {name} / {price} $
            {isAuthorized ? <DishCounter /> : null}
        </>
    );
  };  