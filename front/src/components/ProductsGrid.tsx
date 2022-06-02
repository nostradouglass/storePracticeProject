import React from "react";
import { ProductThumbListing } from "./ProductThumbListing";
import {GET_ALL_PRODUCTS} from '../graphql/productQueries'
import { useQuery } from '@apollo/client'


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

  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)

  if (error) <h3>Error!</h3>
  if (loading) <h3>Loading...</h3>

  return (
    <div className="flex flex-row justify-center flex-wrap  m-4">
      {data?.products.map((product: any) => {
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
  );
}
