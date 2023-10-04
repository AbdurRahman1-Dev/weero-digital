"use client";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaLaptopCode,
  FaPenNib,
} from "react-icons/fa";

const Packages = () => {
  return (
    <section id="packages" className=" py-20 bg-gray-100 overflow-hidden">
      <div className="space-y-20" data-aos="fade-up" data-aos-duration="300">
        <div data-aos="fade-right" className=" flex gap-2 items-center  ">
          <div className="w-[20%] h-[1px] bg-gray-500 "></div>
          <div className="font-bold text-base uppercase secondary-color">
            Packages | Weero Digital
          </div>
        </div>

        <div className="mainContainer  ">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              type: "fraction",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide>
              {" "}
              <div
                data-aos="fade-up-right"
                className="bg-white space-y-5 p-5 py-12 shadow-sm hover:shadow-xl duration-300 hover:scale-[1.01]"
              >
                <FaPenNib className="text-3xl inline-block"></FaPenNib>
                <h3 className="text-2xl font-semibold">
                  CREATIVE GRAPHICS DESIGN
                </h3>
                <p className="text-base secondary-color">
                  Maintain a visually pleasing and consistent aesthetic by
                  focusing on your customers.
                </p>
                <ul className="space-y-3 secondary-color md:text-base text-sm">
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Logo, Brochure & leaflet design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Social media content design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Banner and poster design.
                  </li>
                </ul>
                <button className="flex items-center px-5 py-2 rounded-sm gap-2 border border-blue-500 group uppercase hover:bg-[#004b8e] hover:text-white duration-300">
                  order now
                  <FaArrowRight className="group-hover:translate-x-2  duration-200" />
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div
                data-aos="fade-up"
                className="bg-white space-y-5 p-5 py-12 shadow-sm hover:shadow-xl duration-300 hover:scale-[1.01]"
              >
                <FaLaptopCode className="text-3xl  inline-block"></FaLaptopCode>
                <h3 className="text-2xl font-semibold">DEVELOPMENT</h3>
                <p className="text-base secondary-color">
                  Ensure a visually cohesive and aesthetically pleasing web
                  presence by prioritizing your customers' needs and
                  preferences.
                </p>

                <ul className="space-y-3 secondary-color md:text-base text-sm">
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Websites
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Mobile Apps
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Desktop Apps
                  </li>
                </ul>
                <button className="flex items-center px-5 py-2 rounded-sm gap-2 border border-blue-500 group uppercase hover:bg-[#004b8e] hover:text-white duration-300">
                  order now
                  <FaArrowRight className="group-hover:translate-x-2  duration-200" />
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div
                data-aos="fade-up-left"
                className=" bg-white space-y-5 p-5 py-12 shadow-sm hover:shadow-xl duration-300 hover:scale-[1.01] relative "
              >
                <FaChartLine className="text-3xl inline-block"></FaChartLine>
                <h3 className="text-2xl font-semibold">STRATEGIC PLANNING</h3>
                <p className="text-base secondary-color">
                  Center your customers' interests and preferences in your
                  digital marketing strategy.
                </p>
                <ul className="space-y-3 secondary-color md:text-base text-sm">
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Logo, Brochure & leaflet design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Social media content design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Banner and poster design.
                  </li>
                </ul>
                <button className="flex items-center px-5 py-2 rounded-sm gap-2 border border-blue-500 group uppercase hover:bg-[#004b8e] hover:text-white duration-300 ">
                  order now
                  <FaArrowRight className="group-hover:translate-x-2  duration-200" />
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className=" bg-white space-y-5 p-5 py-12 shadow-sm hover:shadow-xl duration-300 hover:scale-[1.01]">
                <FaChartLine className="text-3xl inline-block"></FaChartLine>
                <h3 className="text-2xl font-semibold">STRATEGIC PLANNING</h3>
                <p className="text-base secondary-color">
                  Center your customers' interests and preferences in your
                  digital marketing strategy.
                </p>
                <ul className="space-y-3 secondary-color md:text-base text-sm">
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Logo, Brochure & leaflet design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Social media content design.
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block me-1 primary-color" />
                    Banner and poster design.
                  </li>
                </ul>
                <button className="flex items-center px-5 py-2 rounded-sm gap-2 border border-blue-500 group uppercase hover:bg-[#004b8e] hover:text-white duration-300">
                  order now
                  <FaArrowRight className="group-hover:translate-x-2  duration-200" />
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Packages;
