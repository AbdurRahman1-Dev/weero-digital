import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className="md:space-y-10 py-12 md:py-20 bg-gray-100 overflow-hidden">
      <div data-aos="fade-right" className=" flex gap-2 items-center  ">
        <div className="w-[20%] h-[1px] bg-gray-500 "></div>
        <div className="font-bold text-base uppercase secondary-color">
          Brands | Weero Digital
        </div>
      </div>
      <div data-aos="zoom-out" className="mainContainer">
        <div>
          <Marquee>
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-12-903d5486.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-13-f87de4bf.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-14-fa9f277d.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>{" "}
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-15-cbffc3ac.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>{" "}
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-16-95045174.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-17-35cc1dc1.png"
                }
                className="w-[100px] md:w-[200px] "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>{" "}
            <div>
              <Image
                src={
                  "https://weerodigital.com/assets/partner-logo-19-5020cf1a.png"
                }
                className="w-[100px] md:w-[200px]  "
                alt=""
                width={200}
                height={200}
              ></Image>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brands;
