import { DishCounter } from "../dish-counter/dish-counter";
import { useAuth } from "../auth-context/use-auth";

export const Dish = ({name, price }) => {
    const { auth, userLogin } = useAuth();
    const { isAuthorized, userName } = auth;

    return (
        <>
            {name} / {price} $
            {isAuthorized ? <DishCounter /> : ""}
        </>
    );
  };