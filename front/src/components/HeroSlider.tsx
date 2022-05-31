import React from "react";
import AwesomeSlider from "react-awesome-slider";
// @ts-ignore
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useAppSelector } from "../redux/hooks";

const AutoplaySlider = withAutoPlay(AwesomeSlider);

export default function HeroSlider() {

  const isMobile = useAppSelector((state) => state.mobileStatus)

  if (isMobile) {
    return (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="./images/slider-pendant-lighting-alt.jpg" />
        <div data-src="./images/slider-wall-clock-alt.jpg"></div>
        <div data-src="./images/slider-basket-alt.jpg"></div>
      </AutoplaySlider>
    );
  }

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src="./images/slider-pendant-lighting.jpeg"></div>
      <div data-src="./images/slider-wall-clock.jpg"></div>
      <div data-src="./images/slider-basket.jpg"></div>
    </AutoplaySlider>
  );
}
