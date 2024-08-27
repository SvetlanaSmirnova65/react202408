import { DishListItem } from "../dish-list-item/dish-list-item";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dishItem) => (
        <DishListItem name={dishItem.name} price={dishItem.price}/>
      ))}
      </ul>
    );
  };