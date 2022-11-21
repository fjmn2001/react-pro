import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { createContext, ReactElement } from "react";
import { ProductContextProps, Product } from "../interfaces";

export const ProductContext = createContext<ProductContextProps | null>(null);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}

export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`}>
        {children}
        {/*<ProductImage img={img} />*/}

        {/*<ProductTitle title={title} />*/}

        {/*<ProductButtons increaseBy={increaseBy} counter={counter} />*/}
      </div>
    </Provider>
  );
};
