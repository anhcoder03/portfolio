import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-secondary py-5">
      <div>
        <div className="flex items-center justify-center text-sm lg:text-base text-white">
          <span className="animate animate-bounce">❤️</span>
          <span className="mx-1">Thank you for scrolling down here</span>
          <span className="animate animate-bounce">❤️</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
