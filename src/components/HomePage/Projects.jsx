"use client";
import content from "../../../public/content.webp";
import web from "../../../public/web.webp";
import model from "../../../public/3d.jpg";
import brand from "../../../public/brand.webp";
import Image from "next/image";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import TitlebarLeft from "../shared/TitlebarLeft";

const Projects = () => {
  return (
    <section id="projects" className=" py-20 bg-gray-900 overflow-hidden">
      <div className="space-y-10" data-aos="fade-up" data-aos-duration="300">
        <TitlebarLeft title={" OUR Projects"}></TitlebarLeft>
        <div>
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={10}
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
            className="mySwiper h-[350px] primary-color"
          >
            <SwiperSlide>
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                className=" bg-slate-200 group w-full overflow-hidden relative"
              >
                <Image
                  className="h-[250px] grayscale group-hover:grayscale-0 duration-200 group-hover:scale-105 overflow-hidden object-cover"
                  width={500}
                  height={300}
                  src={brand}
                  alt="brand"
                />
                <p className="text-xl font-semibold secondary-color p-5 text-center group-hover:text-gray-900 duration-200">
                  Logo & Brand Identity
                </p>
                <span className="text-7xl text-gray-500 absolute left-6 bottom-8 group-hover:text-gray-900 duration-200">
                  01
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className=" bg-slate-200 group w-full overflow-hidden relative"
              >
                <Image
                  className="h-[250px] grayscale group-hover:grayscale-0 duration-200 group-hover:scale-105 overflow-hidden "
                  width={500}
                  height={300}
                  src={content}
                  alt="brand"
                />
                <p className="text-xl font-semibold secondary-color p-5 text-center group-hover:text-gray-900 duration-200">
                  Staic Content
                </p>
                <span className="text-7xl text-gray-500 absolute left-6 bottom-8 group-hover:text-gray-900 duration-200">
                  02
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                className=" bg-slate-200 group w-full overflow-hidden relative"
              >
                <Image
                  className="h-[250px] grayscale group-hover:grayscale-0 duration-200 group-hover:scale-105 overflow-hidden "
                  width={500}
                  height={300}
                  src={web}
                  alt="brand"
                />
                <p className="text-xl font-semibold secondary-color p-5 text-center group-hover:text-gray-900 duration-200">
                  Web Development
                </p>
                <span className="text-7xl text-gray-500 absolute left-6 bottom-8 group-hover:text-gray-900 duration-200">
                  03
                </span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <div className=" bg-slate-200 group w-full overflow-hidden relative">
                <Image
                  className="h-[250px] grayscale group-hover:grayscale-0 duration-200 group-hover:scale-105 overflow-hidden object-cover"
                  width={500}
                  height={300}
                  src={model}
                  alt="brand"
                />
                <p className="text-xl font-semibold secondary-color p-5 text-center group-hover:text-gray-900 duration-200">
                  3d Model
                </p>
                <span className="text-7xl text-gray-500 absolute left-6 bottom-8 group-hover:text-gray-900 duration-200">
                  04
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-end me-5">
            <button className="btn-style group uppercase">
              ALL projects
              <FaArrowRight className="group-hover:translate-x-2  duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
