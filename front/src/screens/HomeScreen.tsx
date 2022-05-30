import React from "react";
import { MainLayout } from "../components/MainLayout";

export default function HomeScreen() {
  return (
    <MainLayout>
      <div>
      <h3 className="text-red-500">HomeScreen</h3>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
    </MainLayout>
  );
}
