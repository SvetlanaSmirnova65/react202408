import { DishCounter } from "../dish-counter/dish-counter";

export const Dish = ({name, price }) => {
    return (
        <>
            {name} / {price} $
            <DishCounter />
        </>
    );
  };