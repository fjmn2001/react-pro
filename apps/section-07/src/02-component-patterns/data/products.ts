import { Product } from "../interfaces";

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

export const products: Product[] = [product1, product2];
