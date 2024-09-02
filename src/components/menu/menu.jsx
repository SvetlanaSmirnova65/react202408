import { Dish } from "../dish/dish";

export const Menu = ({menu}) => {
    return (
      <ul>
        {menu?.map((dishItem) => (
          <li key={dishItem.id}><Dish name={dishItem.name} price={dishItem.price}/></li>
      ))}
      </ul>
    );
  };