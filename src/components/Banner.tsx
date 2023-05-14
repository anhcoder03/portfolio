import React from "react";
import TextAnimation from "./TextAnimation";
import IconBg from "./icons/IconBg";

const Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-slate-300 rounded-full lg:block hidden -z-10 top-72 -left-36"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full -z-10 top-32 -right-20"></div>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-0 gap-y-10 lg:items-center lg:justify-between lg:h-[600px] ">
          <div className="flex flex-col gap-y-8 w-full lg:w-1/2 relative lg:py-0 lg:px-0 py-5 px-3 lg:mt-0 mt-10">
            <div className="absolute lg:block hidden w-[150px] h-[100px] bg-opacity-10 bg-primary rounded-full -z-10 -top-20 -left-10"></div>
            <div className="absolute w-[80px] h-[80px] bg-opacity-10 bg-slate-300  rounded-full -z-10 -top-10 right-60"></div>
            <div className="absolute w-[120px] h-[120px] lg:block hidden bg-opacity-10 bg-primary rounded-full -z-10 top-full left-2/4"></div>

            <h1 className="lg:text-5xl text-2xl font-bold text-white">
              Hi There!
            </h1>
            <h1 className="lg:text-5xl text-2xl font-bold text-white mb-5 lg:mb-10">
              I'M <span className="text-primary">Nguyen Phi Anh</span>
            </h1>
            <TextAnimation></TextAnimation>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="absolute lg:block hidden top-3/4 -z-10 right-0">
              <IconBg></IconBg>
            </div>
            <div className="lg:w-[450px] lg:h-[450px] w-full h-[450px] ">
              <img
                src="/images/me.jpg"
                alt=""
                className="w-full h-full rounded-tl-[30%] rounded-br-[30%] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
