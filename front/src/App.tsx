import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import {useAppSelector, useAppDispatch} from './redux/hooks'
import { setMobile } from "./redux/actions/mobileActions";

let App = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    //@ts-ignore
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      dispatch(setMobile(true))
    } else {
      dispatch(setMobile(false))
    }
    
  },[])

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  );
};

export default App;
