import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { useActions } from './redux/hooks'
import { ProductDetailScreen } from "./screens/ProductDetailScreen";

let App = () => {
  const { setMobile } = useActions();

  useEffect(() => {
    //@ts-ignore
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [setMobile]);


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
