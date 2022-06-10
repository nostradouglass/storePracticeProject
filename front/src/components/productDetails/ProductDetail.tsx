import { DetailsArea } from "./DetailsArea";
import { ImageArea } from "./ImageArea";
import { ColorChoice } from "./ColorChoice";
import { QuantityChoice } from "./QuantityChoice";
import { ColorTypes, Product} from '../../Types';
import { Button } from "../ui/Button";
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
        <Button onClick={() => console.log("test")} text="Add to cart" colorType={ColorTypes.DARK}></Button>
        </div>
        
        </div>
        <Description description={product.description} />
    </div>
  )
};
