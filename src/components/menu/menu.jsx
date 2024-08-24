import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dishItem) => (
        <Dish id={dishItem.id} name={dishItem.name} price={dishItem.price}/>
      ))}
      </ul>
    );
  };