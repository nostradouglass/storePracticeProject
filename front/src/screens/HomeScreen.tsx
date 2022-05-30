import React from "react";
import HeroSlider from "../components/HeroSlider";
import { MainLayout } from "../components/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <HeroSlider />
    </MainLayout>
  );
}
