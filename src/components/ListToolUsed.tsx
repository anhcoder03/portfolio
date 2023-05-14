import React from "react";
import Heading from "./Heading";
import { listTools } from "../utils/ListTools";

const ListToolUsed: React.FC = () => {
  return (
    <div className="container py-20">
      <Heading>MY TOOLS USED</Heading>
      <div className="grid grid-cols-4 gap-10  mt-16">
        {listTools.map((item) => (
          <div
            key={item.src}
            className="flex flex-col items-center justify-center  relative border border-primary p-10 rounded-lg transition-all duration-500 cursor-pointer hover:scale-110"
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
  );
};

export default ListToolUsed;
