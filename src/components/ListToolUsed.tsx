import React from "react";
import Heading from "./Heading";
import { listTools } from "../utils/ListTools";

const ListToolUsed: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-[200px] h-[200px] bg-opacity-10 bg-slate-400 rounded-full top-20 -left-12"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full top-72 -right-16"></div>
      <div className="container py-20">
        <Heading>MY TOOLS USED</Heading>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:px-0 px-3 gap-10  mt-16">
          {listTools.map((item) => (
            <div
              key={item.src}
              className="flex flex-col items-center justify-center  relative border border-primary p-10 rounded-lg transition-all duration-500 cursor-pointer hover:scale-110 h-[150px]"
            >
              <img
                src={item.src}
                alt={item.src}
                className="h-full w-full max-w-[67px] max-h-[67px]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListToolUsed;
