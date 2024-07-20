import { useCount } from "../hooks/use-count";
import { CustomButton } from "../custom-button/custom-button";
import styles from "./counter.module.css";

export function Counter() {
  const { count, decrement, increment } = useCount();

  return (
    <div className={styles.counter}>
      <CustomButton
        colorViewVariant={"blue"}
        onClick={decrement}>
        -
      </CustomButton>
      {count}
      <CustomButton
        colorViewVariant={"red"}
        onClick={increment}>
        +
      </CustomButton>
    </div>
  );
}