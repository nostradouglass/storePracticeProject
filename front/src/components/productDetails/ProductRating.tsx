
import { showStars } from "./starsUtil";

export const ProductRating = () => {
  let rating = 1;

  return <div>
      {showStars(3)}
  </div>;
};
