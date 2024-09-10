import { Dish } from "../dish/dish";

export const Menu = ({dishesIds}) => {

    return (
      <ul>
        {dishesIds?.map((id) => (
          <li key={id}><Dish id={id}/></li>
      ))}
      </ul>
    );
  };