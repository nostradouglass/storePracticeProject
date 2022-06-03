import { ProductThumbListing } from "./ProductThumbListing";
import { GET_ALL_PRODUCTS } from "../graphql/productQueries";
import { useQuery } from "@apollo/client";

interface GetAllProducts {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  brand: string;
  description: string;
  price: number;
  msrp: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  favorite: boolean;
  color: string;
}

interface GetAllProductsData {
  products: GetAllProducts[];
}

export default function ProductsGrid() {
  const { loading, error, data } = useQuery<GetAllProductsData, GetAllProducts>(
    GET_ALL_PRODUCTS
  );

  if (error) <h3>Error!</h3>;
  if (loading) <h3>Loading...</h3>;

  return (
    <div className="flex flex-row justify-center flex-wrap  m-4">
      {data?.products.map((product) => {
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
  );
}
