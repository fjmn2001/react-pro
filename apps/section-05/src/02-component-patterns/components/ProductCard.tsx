import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { FC } from "react";
import noImage from "../assets/no-image.jpg";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { counter, increaseBy } = useProduct();
  const { img, title } = product;

  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={img ? img : noImage}
        alt={title}
      />

      <span className={styles.productDescription}>{title}</span>
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
