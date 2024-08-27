import { Counter } from "../counter/counter";

export const Dish = ({id, name, price }) => {
    return (
        <>
            {name} / {price} $
            <Counter />
        </>
    );
  };