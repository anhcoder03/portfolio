import { ReactNode } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header></Header>
      <div className="mt-[96px]">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
