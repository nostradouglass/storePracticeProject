import { ProductThumbListing } from "./ProductThumbListing";
import { GET_ALL_PRODUCTS, SEARCH_PRODUCTS } from "../graphql/productQueries";
import { useQuery } from "@apollo/client";
import { Product } from "../Types";
import {searchTermVar} from "../graphql/state"
import {useReactiveVar} from '@apollo/client'

interface GetAllProductsData {
  products: Product[];
}

interface SearchProductsData {
  searchProducts: any;
}

export default function ProductsGrid() {
  const { loading, error, data } = useQuery<GetAllProductsData, Product>(
    GET_ALL_PRODUCTS
  );


  const searchTerm = useReactiveVar(searchTermVar)

  const foundProducts = useQuery<SearchProductsData, { term: string }>(
    SEARCH_PRODUCTS,
    { variables: { term: searchTerm }, pollInterval: 500 }
  );

  if (error) <h3>Error!</h3>;
  if (loading) <h3>Loading...</h3>;

  if (foundProducts?.data?.searchProducts.length > 0) {
    return (
      <div className="flex flex-row justify-center flex-wrap  m-4">
        {foundProducts?.data?.searchProducts?.map((product: Product) => {
          return <ProductThumbListing product={product} key={product.id} />;
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-row justify-center flex-wrap  m-4">
      {data?.products.map((product) => {
        return <ProductThumbListing product={product} key={product.id} />;
      })}
    </div>
  );
};
