import { ProductCard } from "../components/ProductCard";

const product = {
  id: "custom-id",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} />
      </div>
    </>
  );
};
