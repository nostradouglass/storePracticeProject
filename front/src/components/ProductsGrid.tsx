import React from "react";
import { ProductThumbListing } from "./ProductThumbListing";

let products = [
  {
    id: 1,
    image: "shell-chair/shell-chair.jpeg",
    imageAlt: "shell-chair/shell-chair-alt.jpeg",
    title: "Modern Shell Chair",
    price: 208.0,
  },
  {
    id: 2,
    image: "pendant-lamp/pendant-lamp.jpeg",
    imageAlt: "pendant-lamp/pendant-lamp-alt.jpeg",
    title: "Pendant Lamp",
    price: 89.0,
  },
  {
    id: 3,
    image: "shell-chair/shell-chair.jpeg",
    imageAlt: "shell-chair/shell-chair-alt.jpeg",
    title: "Modern Shell Chair",
    price: 208.0,
  },
  {
    id: 4,
    image: "pendant-lamp/pendant-lamp.jpeg",
    imageAlt: "pendant-lamp/pendant-lamp-alt.jpeg",
    title: "Pendant Lamp",
    price: 89.0,
  },
  {
    id: 5,
    image: "shell-chair/shell-chair.jpeg",
    imageAlt: "shell-chair/shell-chair-alt.jpeg",
    title: "Modern Shell Chair",
    price: 208.0,
  },
  {
    id: 6,
    image: "pendant-lamp/pendant-lamp.jpeg",
    imageAlt: "pendant-lamp/pendant-lamp-alt.jpeg",
    title: "Pendant Lamp",
    price: 89.0,
  },
];


export default function ProductsGrid() {
  return (
    <div className="flex flex-row justify-start flex-wrap m-12">
      {products.map((product) => {
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
    
  );
}
