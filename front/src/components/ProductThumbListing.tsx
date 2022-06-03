import { useState } from "react";
import { useAppSelector } from "../redux/hooks";

interface Props {
  product: {
    id: number;
    image: string;
    imageAlt: string;
    title: string;
    price: number;
    favorite: boolean;
  };
}

export const ProductThumbListing = ({ product }: Props) => {
  const [priceShowMore, setPriceShowMore] = useState<number | string>(
    `$${product.price}`
  );

  const { isMobile } = useAppSelector(
    (state) => state.mobileStatus as { isMobile: boolean }
  );

  let onHover = () => {
    setPriceShowMore("Show more");
  };
  let onHoverLeave = () => {
    setPriceShowMore(`$${product.price}`);
  };

  let favoriteTag = () => {
    if (isMobile) {
      if (product.favorite) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );
    }
  };

  return (
    <div className="m-2">
      <img
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
        className="w-40 h-84 md:w-80 md:h-96 cursor-pointer"
        src={`../images/${product.image}`}
      />
      <div className="flex justify-between">
        <h4 className="text-gray-500 py-2 w-24 cursor-pointer">
          {product.title}
        </h4>
        {favoriteTag()}
      </div>
      <h5
        onMouseEnter={onHover}
        onMouseLeave={onHoverLeave}
        className="price cursor-pointer"
        style={{ opacity: "1" }}
      >
        {priceShowMore}
      </h5>
    </div>
  );
};
