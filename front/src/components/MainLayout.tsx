import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SignUpRegisterModal from "./SignUpRegisterModal";

type Props = {
  children: JSX.Element;
};

export const MainLayout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <SignUpRegisterModal />
      {children}
      <Footer></Footer>
    </>
  );
};
