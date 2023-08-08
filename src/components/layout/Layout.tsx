import { FC } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
interface LayoutProps {
  children: JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <Toaster/>
      <div className="text-lg text-black bg-neutral-100 dark:bg-neutral-900 dark:text-white h-screen">
        <Navbar></Navbar>
        <div className="mt-2 px-3 md:px-12">{children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layout;
