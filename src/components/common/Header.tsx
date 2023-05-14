import React from "react";
import { Link, NavLink } from "react-router-dom";
import { listMenu } from "../../utils/ListMenu";
const Header: React.FC = () => {
  return (
    <div className="bg-dark py-8 fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <div>
              <Link to={"/"}>
                <span className="font-bold text-2xl text-primary">
                  {"< Anhcoder03 />"}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-16">
            {listMenu.map((item) => (
              <NavLink
                to={item.path}
                key={item.title}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-white"
                }
              >
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
