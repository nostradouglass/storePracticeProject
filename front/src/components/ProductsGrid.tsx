import { ProductThumbListing } from "./ProductThumbListing";
import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS } from "../graphql/productQueries";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "../redux/hooks";

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
    GET_ALL_PRODUCTS, 
  );

  const { searchTerm } = useAppSelector((state) => state.searchTerm as { searchTerm: string }
  );

  const foundProducts = useQuery<any, any>(
    SEARCH_PRODUCTS, {variables: {term: searchTerm}, pollInterval: 500}
  );
 
  

  if (error) <h3>Error!</h3>;
  if (loading) <h3>Loading...</h3>;

  if (foundProducts?.data?.searchProducts.length > 0) {
    return (
    <div className="flex flex-row justify-center flex-wrap  m-4">
      {foundProducts?.data?.searchProducts.map((product: any) => {
      
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
    )
  }

  return (
    <div className="flex flex-row justify-center flex-wrap  m-4">
      {data?.products.map((product) => {
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
  );
}
