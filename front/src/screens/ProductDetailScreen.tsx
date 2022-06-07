import { SINGLE_PRODUCT } from "../graphql/productQueries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { MainLayout } from "../components/MainLayout";
import { ProductDetail } from "../components/productDetails/ProductDetail";

export const ProductDetailScreen = (props: any) => {
  let { id } = useParams();

  const { loading, error, data } = useQuery<any, any>(SINGLE_PRODUCT, {
    variables: { id: parseInt(id as string) },
  });

  

  if (loading) <p>Loading...</p>;
  if (error) <p>Error</p>;
  if (data) {
    return (
      <MainLayout>
        <ProductDetail product={data.product} />
      </MainLayout>
    );
  } else {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
};
