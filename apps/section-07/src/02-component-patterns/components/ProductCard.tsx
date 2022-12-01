import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { createContext, CSSProperties, ReactElement } from "react";
import { ProductContextProps, Product, onChangeArgs } from "../interfaces";

export const ProductContext = createContext<ProductContextProps | null>(null);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/*<ProductImage img={img} />*/}

        {/*<ProductTitle title={title} />*/}

        {/*<ProductButtons increaseBy={increaseBy} counter={counter} />*/}
      </div>
    </Provider>
  );
};
