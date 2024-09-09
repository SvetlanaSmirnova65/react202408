import { Button } from "../button/button";

import styles from "./counter.module.css";

export const Counter = ({value, increment, decrement}) => {

  return (
    <div>
      <Button onClick={increment} className={styles.default} viewVariant='default'>+</Button>
      {value}
      <Button onClick={decrement} className={styles.default} viewVariant='default'>-</Button>
    </div>
  );
};