import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src="./coffee-mug.png"
        alt="Coffee Mug"
      />

      {/*<img className={styles.productImg} src={noImage} alt="Coffee Mug" />*/}

      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>

        <div className={styles.countLabel}>{counter}</div>

        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  );
};
