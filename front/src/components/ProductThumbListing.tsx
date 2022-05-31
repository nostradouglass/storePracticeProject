import React from "react";

interface Props {
  product: {
    id: number;
    image: string;
    imageAlt: string;
    title: string;
    price: number;
  };
}

export const ProductThumbListing = ({ product }: Props) => {
  return (
    <div className="m-2">
        <img className="w-72 h-84" src={`../images/${product.image}`} />
      <h4 className="text-gray-500 py-2">{product.title}</h4>
      <h5>${product.price}</h5>
    </div>
  );
};
