import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed top-[27%] left-10 h-screen z-[99] hidden md:block">
      <div className="flex flex-col gap-5 text-2xl primary-color">
        <FaFacebook></FaFacebook>
        <FaLinkedin></FaLinkedin>
        <FaInstagram></FaInstagram>
        <FaBehance></FaBehance>
        <FaTwitter></FaTwitter>
        <FaDribbble></FaDribbble>
      </div>
    </div>
  );
};

export default SocialIcons;
