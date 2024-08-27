import { Dish } from "../dish/dish";

export const DishListItem = ({name, price }) => {
    return (
        <li><Dish name={name} price={price}/></li>
    );
  };