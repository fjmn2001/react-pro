import { CSSProperties, useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext)!;

  const isMaxReached = useCallback(() => {
    if (!maxCount) return false;

    return maxCount === counter;
  }, [maxCount, counter]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ""
        }`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
