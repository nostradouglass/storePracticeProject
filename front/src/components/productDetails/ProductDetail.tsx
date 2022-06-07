import { BreadCrumb } from "./BreadCrumb";
import { DetailsArea } from "./DetailsArea";
import { ImageArea } from "./ImageArea";
import { useAppSelector } from '../../redux/hooks'
import { ColorChoice } from "./ColorChoice";
import { QuantityChoice } from "./QuantityChoice";

interface Props {
  product: {
    brand: string;
    color: string;
    countInStock: number;
    description: string;
    favorite: false;
    image: string;
    imageAlt: string;
    msrp: number;
    numReviews: number;
    price: number;
    rating: number;
    title: string;
  }
}

export const ProductDetail = ({product}: Props) => {

  const { isMobile } = useAppSelector(
    (state) => state.mobileStatus as { isMobile: boolean }
  );

  return (
    <div className="bg-gray-100">
      <div className="w-full">
        <ImageArea  image={product.image} imageAlt={product.imageAlt}>
        </ImageArea>
        <DetailsArea product={product} />
        <ColorChoice image1={product.image} image2={product.imageAlt} />
        <QuantityChoice />
        </div>

    </div>
  )
};
