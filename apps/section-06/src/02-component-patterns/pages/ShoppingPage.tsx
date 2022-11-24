import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "custom-id",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
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
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={"Hi there!"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className={"bg-dark"}>
          <ProductImage className={"custom-image"} />
          <ProductTitle className={"text-white"} />
          <ProductButtons className={"custom-buttons"} />
        </ProductCard>
      </div>
    </div>
  );
};
