import BreadcrumbAndSearch from "../components/BreadcrumbAndSearch";
import HeroSlider from "../components/HeroSlider";
import { MainLayout } from "../components/MainLayout";
import ProductsGrid from "../components/ProductsGrid";

export default function HomeScreen() {
  return (
    <MainLayout>
      <>
      <HeroSlider />
      <BreadcrumbAndSearch />
      <ProductsGrid />
      </>
    </MainLayout>
  );
}
