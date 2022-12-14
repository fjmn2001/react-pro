import { useState } from "react";
import { Product, ProductInCart } from "../interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    product,
    count,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return { ...prev, [product.id]: productInCart };
      }

      const { [product.id]: toDelete, ...rest } = prev;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = prev;
      //
      //   return rest;
      // }
      //
      // return {
      //   ...prev,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};