import AwesomeSlider from "react-awesome-slider";
// @ts-ignore
import withAutoPlay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import HeroSliderStyles from "../css/HeroSlider.module.css";
import { useReactiveVar } from "@apollo/client";
import { isMobileVar } from "../graphql/state";

const AutoplaySlider = withAutoPlay(AwesomeSlider);

export default function HeroSlider() {
  const isMobile = useReactiveVar(isMobileVar);

  if (isMobile) {
    return (
      <AutoplaySlider
        cssModule={HeroSliderStyles}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src="./images/slider-pendant-lighting-alt.jpg"></div>
        <div data-src="./images/slider-wall-clock-alt.jpg"></div>
        <div data-src="./images/slider-basket-alt.jpg"></div>
      </AutoplaySlider>
    );
  } else {
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
            <h3 className="md:text-xl md:underline md:text-gray-200">
              Interior
            </h3>
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
}
