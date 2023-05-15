import React from "react";
import Heading from "./Heading";
import { listSkill } from "../utils/ListSkill";

const ListSkill: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-[120px] h-[120px] bg-opacity-10 bg-slate-400 rounded-full top-20 -left-12"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full top-72 -right-16"></div>
      <div className="container py-20">
        <Heading>MY SKILLS</Heading>
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:px-0 px-3 gap-10  mt-16">
          {listSkill.map((item) => (
            <div
              key={item.src}
              className="flex flex-col items-center justify-center  relative border border-primary p-10 rounded-lg transition-all duration-500 cursor-pointer hover:scale-110 h-[150px]"
            >
              <img
                src={item.src}
                alt={item.src}
                className="h-full w-full max-w-[70px] max-h-[70px] "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListSkill;
