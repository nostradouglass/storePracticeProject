import { StarIcon as StarSolid } from "@heroicons/react/solid";
import { StarIcon as StarOutline } from "@heroicons/react/outline";

export let showStars = (numberOfStars: number) => {
  let stars = <></>;

  enum StarAmount {
    ZeroStar,
    OneStar,
    TwoStar,
    ThreeStar,
    FourStar,
    FiveStar,
  };

  switch (numberOfStars) {
    case StarAmount.ZeroStar:
      stars = (
        <>
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
      break;
    case StarAmount.OneStar:
      stars = (
        <>
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
      break;
    case StarAmount.TwoStar:
      stars = (
        <>
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
      break;
    case StarAmount.ThreeStar:
      stars = (
        <>
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
      break;
    case StarAmount.FourStar:
      stars = (
        <>
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
      break;
    case StarAmount.FiveStar:
      stars = (
        <>
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
          <StarSolid className="w-7 h-7 text-yellow-500" />
        </>
      );
      break;
    default:
      stars = (
        <>
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
          <StarOutline className="w-6 h-6 text-gray-500" />
        </>
      );
  }
  return <div className="flex flex-row items-center">{stars}</div>;
};
