import { Counter } from "../counter/counter";

export const Dish = ({id, name, price }) => {
    return (
        <li key={id}>{name} / {price} $ <Counter /></li>
    );
  };