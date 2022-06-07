import { DetailsArea } from "./DetailsArea";
import { ImageArea } from "./ImageArea";
import { ColorChoice } from "./ColorChoice";
import { QuantityChoice } from "./QuantityChoice";
import { Product} from '../../Types';

interface Props {
  product: Product
};

export const ProductDetail = ({product}: Props) => {

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
