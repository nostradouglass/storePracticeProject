import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
// import {  useAppDispatch } from "./redux/hooks";
import { setMobile } from "./redux/action-creators";
import { useActions } from './redux/hooks'

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
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;
