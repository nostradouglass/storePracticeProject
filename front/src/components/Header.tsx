import HamburgerMenu from "./HamburgerMenu";
import { useAppSelector } from "../redux/hooks";

interface Props {
  isMobile: boolean;
}

const LeftNav = ({ isMobile }: Props) => {
  if (isMobile) {
    return (
      <div className="flex flex-col justify-center">
        <HamburgerMenu />
      </div>
    );
  }
  return (
    <div className="flex justify-around md:w-64 lg:w-96">
      <h5 className="text-gray-500">Shop</h5>
      <h5 className="text-gray-500">Categories</h5>
      <h5 className="text-gray-500">Pages</h5>
      <h5 className="text-gray-500">Elements</h5>
    </div>
  );
};

const CenterNav = () => {
  return (
    <h1 className="text-gray-800 text-2xl tracking-widest md:w-60 lg:w-96">
      SAVOY
    </h1>
  );
};

const RightNav = ({ isMobile }: Props) => {
  if (isMobile) {
    return <h5>(0)</h5>;
  }
  return (
    <div className="flex justify-between md:w-36">
      <div className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <h5 className="text-gray-500">Sign in</h5>
      <h5 className="text-gray-500">Cart</h5>
    </div>
  );
};

export default function Header() {
  const { isMobile } = useAppSelector(
    (state) => state.mobileStatus as { isMobile: boolean }
  );

  return (
    <div className="flex justify-between py-12 px-12">
      <LeftNav isMobile={isMobile} />
      <CenterNav />
      <RightNav isMobile={isMobile} />
    </div>
  );
}
