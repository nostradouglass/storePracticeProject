import { DetailsArea } from "./DetailsArea";
import { ImageArea } from "./ImageArea";
import { ColorChoice } from "./ColorChoice";
import { QuantityChoice } from "./QuantityChoice";
import { Product} from '../../Types';
import { DarkButton } from "../DarkButton";
import { Description } from "./Description";

interface Props {
  product: Product
};

export const ProductDetail = ({product}: Props) => {

  return (
    <div className="bg-gray-100 ">
      <div className="w-full md:flex md:flex-row md:justify-center">
        <ImageArea  image={product.image} imageAlt={product.imageAlt} />
       <div className="md:mr-48">
        <DetailsArea product={product} />
        <ColorChoice image1={product.image} image2={product.imageAlt} />
        <QuantityChoice />
        <DarkButton text="Add to cart"></DarkButton>
        </div>
        
        </div>
        <Description description={product.description} />
    </div>
  )
};
