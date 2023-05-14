import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation: React.FC = () => {
  return (
    <TypeAnimation
      sequence={[
        "",
        300,
        "I",
        300,
        "I am",
        300,
        "I am Frontend",
        300,
        "I am Frontend Developer",
        1000,
      ]}
      repeat={Infinity}
      className="text-primary lg:text-5xl text-2xl font-bold"
    ></TypeAnimation>
  );
};

export default TextAnimation;
