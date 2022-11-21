import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces";

export const ProductContext = createContext<ProductContextProps | null>(null);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/*<ProductImage img={img} />*/}

        {/*<ProductTitle title={title} />*/}

        {/*<ProductButtons increaseBy={increaseBy} counter={counter} />*/}
      </div>
    </Provider>
  );
};
