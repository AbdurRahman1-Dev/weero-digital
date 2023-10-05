import React from "react";

const TitlebarRight = ({ title }) => {
  return (
    <div
      data-aos="fade-left"
      className=" flex gap-2 items-center justify-end  "
    >
      <div className="font-bold text-base uppercase secondary-color">
        {title} | Weero Digital
      </div>
      <div className="w-[20%] h-[1px] bg-gray-500 "></div>
    </div>
  );
};

export default TitlebarRight;
