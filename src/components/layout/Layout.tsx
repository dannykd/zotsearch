import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="mx-auto flex h-screen max-w-7xl
      flex-col bg-white text-lg"
    >
      <Navbar></Navbar>
      <div className="mt-6 mb-12 h-full px-6 md:px-12">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
