import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { ProductDetailScreen } from "./screens/ProductDetailScreen";
import {isMobileVar} from './graphql/state'


let App = () => {

  useEffect(() => {
    //@ts-ignore
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // setMobile(true)
      isMobileVar(true)

    } else {
      // setMobile(false)
      isMobileVar(false)
    }
  }, []);


  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:id" element={<ProductDetailScreen />} />
      </Routes>
    </div>
  );
};

export default App;
