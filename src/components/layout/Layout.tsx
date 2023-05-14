import { ReactNode } from "react";
import Header from "../common/Header";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Header></Header>
      <div className="mt-[96px]">{children}</div>
    </div>
  );
};

export default Layout;
