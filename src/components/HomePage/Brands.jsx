import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import TitlebarLeft from "../shared/TitlebarLeft";

const Brands = () => {
  const brands = [
    {
      img: "https://weerodigital.com/assets/partner-logo-12-903d5486.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-13-f87de4bf.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-14-fa9f277d.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-15-cbffc3ac.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-16-95045174.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-17-35cc1dc1.png",
    },
    {
      img: "https://weerodigital.com/assets/partner-logo-19-5020cf1a.png",
    },
  ];
  return (
    <section className="md:space-y-10 py-10 bg-white overflow-hidden">
      <TitlebarLeft title={"Brands"}></TitlebarLeft>
      <div data-aos="zoom-out" className="mainContainer">
        <div>
          <Marquee>
            {brands?.map((brand, i) => (
              <div key={i}>
                <Image
                  src={brand?.img}
                  className="w-[100px] md:w-[200px] "
                  alt="clients"
                  width={200}
                  height={200}
                ></Image>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brands;
