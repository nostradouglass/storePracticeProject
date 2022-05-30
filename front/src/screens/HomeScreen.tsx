import React from "react";
import BreadcrumbAndSearch from "../components/BreadcrumbAndSearch";
import HeroSlider from "../components/HeroSlider";
import { MainLayout } from "../components/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <>
      <HeroSlider />
      <BreadcrumbAndSearch />
      </>
    </MainLayout>
  );
}
