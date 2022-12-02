import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";
import { onChangeArgs, Product } from "../interfaces";
import { useState } from "react";

const product1 = {
  id: "custom-id",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "custom-id2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.webp",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
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
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;

        return rest;
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      };
    });
  };

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className={"bg-dark"}
            onChange={onProductCountChange}
          >
            <ProductImage className={"custom-image"} />
            <ProductTitle className={"text-white"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}
      </div>

      <div className={"shopping-cart"}>
        {Object.entries(shoppingCart).map(([, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            className={"bg-dark"}
            style={{ width: "100px" }}
          >
            <ProductImage className={"custom-image"} />
            <ProductButtons
              className={"custom-buttons"}
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
