
import { showStars } from "./starsUtil";

export const ProductRating = () => {

  return <div className="md:my-4">
      {showStars(3)}
  </div>;
};
