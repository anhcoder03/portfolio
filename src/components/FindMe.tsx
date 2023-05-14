import React from "react";
import Heading from "./Heading";
import { listContact } from "../utils/ListContact";
import { Link } from "react-router-dom";

const FindMe: React.FC = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <div className="absolute w-[50px] h-[50px] bg-opacity-10 bg-slate-300 rounded-full lg:block hidden -z-10 top-1/2 left-3/4"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full -z-10 top-32 -right-20"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full -z-10 top-32"></div>
      <div className="container">
        <Heading>FIND ME ON</Heading>
        <p className="text-center mt-5 text-white text-lg">
          Connect with me here!
        </p>
        <div className="mt-10">
          <div className="flex justify-center gap-x-6">
            {listContact.map((item) => (
              <div
                key={item.link}
                className="bg-primary flex items-center justify-center w-[50px] h-[50px] shadow-lg  rounded-full hover:shadow-purple-500 "
              >
                <Link to={item.link} target="_blank" className="">
                  {item.icon()}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMe;
