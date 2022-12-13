import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks";
import { createContext, CSSProperties, ReactElement } from "react";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
} from "../interfaces";

export const ProductContext = createContext<ProductContextProps | null>(null);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: () => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children()}
      </div>
    </Provider>
  );
};
