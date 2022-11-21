import { FC, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle: FC<Props> = ({ title, className }) => {
  const { product } = useContext(ProductContext)!;
  let titleToShow: string;

  if (title) {
    titleToShow = title;
  } else {
    titleToShow = product.title;
  }

  return (
    <span className={`${styles.productDescription} ${className}`}>
      {titleToShow}
    </span>
  );
};
