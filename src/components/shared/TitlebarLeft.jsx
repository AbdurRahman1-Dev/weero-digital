import React from "react";

const TitlebarLeft = ({ title }) => {
  return (
    <div data-aos="fade-right" className=" flex gap-2 items-center  ">
      <div className="w-[20%] h-[1px] bg-gray-500 "></div>
      <div className="font-bold text-base uppercase secondary-color">
        {title} | Weero Digital
      </div>
    </div>
  );
};

export default TitlebarLeft;
