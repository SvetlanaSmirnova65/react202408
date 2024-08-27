import { Counter } from "../counter/counter";

export const Dish = ({name, price }) => {
    return (
        <>
            {name} / {price} $
            <Counter />
        </>
    );
  };