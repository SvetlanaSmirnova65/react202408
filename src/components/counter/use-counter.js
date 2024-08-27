import { useState } from "react";

const maxValue = 5;
const minValue = 0;

export const useCount = () => {
    const [value, setValue] = useState(0);


    const increment = () => {
        if (value >= maxValue)
            return;

        setValue(value + 1);
    }

    const decrement = () => {
        if (value <= minValue)
            return;

        setValue(value - 1);
    }

    return {
        value,
        increment,
        decrement,
    };
};