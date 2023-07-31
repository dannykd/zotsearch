import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
interface LayoutProps {
  children: JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" h-screen">
      <Toaster/>
      <div
        className="mx-auto flex h-screen max-w-5xl
        flex-col text-lg text-white"
      >
        <Navbar></Navbar>
        <div className="mt-6 mb-12 px-3 md:px-12">{children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
