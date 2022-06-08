import AwesomeSlider from "react-awesome-slider";
// @ts-ignore
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useAppSelector } from "../redux/hooks";
import HeroSliderStyles from "../css/HeroSlider.module.css";
import { useEffect, useState } from "react";

const AutoplaySlider = withAutoPlay(AwesomeSlider);

export default function HeroSlider() {

  // Use the isMobileLocal for the state check. 
  // The local state loads immediatly until the redux state shows up. 
  // Keeps the initial slider image from not loading.
  const [isMobileLocal, setIsMobileLocal] = useState(false);
  const isMobile = useAppSelector((state) => state.mobileStatus.isMobile);
  useEffect(() => {
    setIsMobileLocal(isMobile);
  }, []);

  if (!isMobileLocal) {
    return (
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="./images/slider-pendant-lighting-alt.jpg"></div>
        <div data-src="./images/slider-wall-clock-alt.jpg"></div>
        <div data-src="./images/slider-basket-alt.jpg"></div>
      </AutoplaySlider>
    );
  }

  return (
    <AutoplaySlider
      cssModule={HeroSliderStyles}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      <div data-src="./images/slider-pendant-lighting-hero.jpg">
        <div className="md:absolute md:top-72 md:left-56 md:text-white hidden md:block">
          <h2 className="md:text-2xl md:text-white">
            Contemporary Pendant
            <br /> Lighting
          </h2>
          <br />
          <h3 className="md:text-xl md:underline md:text-gray-200">Interior</h3>
        </div>
      </div>
      <div data-src="./images/slider-wall-clock-hero.jpg">
        <div className="md:absolute md:top-72 md:left-56 md:text-white hidden md:block">
          <h2 className="md:text-2xl md:text-gray-800">
            Minimal Rotating Disc
            <br /> Wall Clock
          </h2>
          <br />
          <h3 className="md:text-xl md:underline md:text-gray-500">
            Decoration
          </h3>
        </div>
      </div>
      <div data-src="./images/slider-basket-hero.jpg">
        <div className="md:absolute md:top-72 md:left-56 md:text-white hidden md:block">
          <h2 className="md:text-2xl md:text-gray-800">
            Bamboo Zigzag Pattern
            <br />
            Basket
          </h2>
          <br />
          <h3 className="md:text-xl md:underline md:text-gray-500">
            Essentials
          </h3>
        </div>
      </div>
    </AutoplaySlider>
  );
}
