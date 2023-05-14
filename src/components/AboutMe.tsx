import React from "react";
import Heading from "./Heading";
import IconBg from "./icons/IconBg";

const AboutMe: React.FC = () => {
  return (
    <div className=" py-12 min-h-[450px] relative overflow-hidden bg-secondary">
      <div className="absolute w-[200px] h-[200px] bg-opacity-10 bg-slate-400 rounded-full top-20 -left-12"></div>
      <div className="absolute w-[250px] h-[250px] bg-opacity-10 bg-primary rounded-full top-72 -right-16"></div>
      <div className="absolute hidden lg:block -left-32 top-3/4 ">
        <IconBg></IconBg>
      </div>
      <div className="container">
        <Heading>ABOUT ME</Heading>
        <div className="flex lg:items-center flex-col-reverse gap-y-10 lg:flex-row lg:justify-between gap-x-20 mt-20">
          <div className="w-[450px] h-[450px]">
            <img
              src="/images/me1.jpg"
              className="w-full h-full rounded-tr-[30%] rounded-bl-[30%] object-cover "
              alt=""
            />
          </div>
          <div className="flex flex-col text-white flex-1 lg:px-0 lg:py-0 px-3 py-5">
            <div className="mb-5">
              <h3 className="text-xl mb-5">
                A story of <span className="text-primary">hardwork</span> and{" "}
                <span className="text-primary">perseverance</span>
              </h3>
              <p className="text-base">
                Hello, I am a frontend developer. My job is to create websites
                and web applications to solve my clients' problems. I am
                passionate about programming and always try to learn new
                technologies to improve my development skills. If you are
                looking for an experienced and passionate frontend developer, I
                would be the right person to help you with your projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-5">Information</h3>
              <div>
                <p>
                  Year of Birth: <span>2003</span>
                </p>
                <p>
                  Address: <span>Ha Noi, Viet Nam</span>
                </p>
                <p>
                  Email: <span>anhcoder03@gmail.com</span>
                </p>
                <p>
                  Phone: <span>035 798 4421</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
