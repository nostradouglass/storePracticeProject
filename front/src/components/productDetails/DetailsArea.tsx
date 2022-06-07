import { ProductRating } from "./ProductRating";
import {Product} from '../../Types';

interface Props {
    product: Product
};

export const DetailsArea = (props: Props) => {

    let { product } = props;

    return (
        <div className="p-4">
            <h2>Title</h2>
            <div className="flex flex-row xy-4 py-4">
                <h5 className="text-gray-500 text-xs mx-2 line-through">$123.00</h5>
                <h3 className="text-orange-500 mx-2">$208.00</h3>
                <div className="border-gray-500 border-2 border-solid rounded-2xl px-2">
                    <h4 className="text-gray-500 text-sm">-11%</h4>
                </div>
            </div>
            <section>
                <p className="text-gray-500">{product.description}</p>
            </section>
            <ProductRating />
        </div>
    )
};