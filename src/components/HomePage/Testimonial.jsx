"use client";
import { FaQuoteRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";
import TitlebarRight from "../shared/TitlebarRight";

const Testimonial = () => {
  return (
    <section id="client" className=" py-20 z-50 bg-white overflow-hidden">
      <div className="space-y-10" data-aos="fade-up" data-aos-duration="300">
        <TitlebarRight title={"TESTIMONIAL "} />

        <div data-aos="zoom-in-up" className="md:w-2/3 mx-auto">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mainContainer  text-center">
                <div className="space-y-5">
                  <FaQuoteRight className="inline-block primary-color text-2xl"></FaQuoteRight>
                  <article className="text-base secondary-color">
                    Over the years, we have had the privilege of working with
                    leading brands both domestically and internationally. This
                    experience has not only honed our skills but has also
                    provided us with valuable insights into various industries,
                    enabling us to deliver strategies that deliver tangible
                    results.
                  </article>
                  <h2 className="text-2xl font-semibold primary-color">
                    MD. Rumanur Rashid
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mainContainer  text-center">
                <div className="space-y-5">
                  <FaQuoteRight className="inline-block primary-color text-2xl"></FaQuoteRight>
                  <article className="text-base secondary-color">
                    Over the years, we have had the privilege of working with
                    leading brands both domestically and internationally. This
                    experience has not only honed our skills but has also
                    provided us with valuable insights into various industries,
                    enabling us to deliver strategies that deliver tangible
                    results.
                  </article>
                  <h2 className="text-2xl font-semibold primary-color">
                    MD. Rumanur Rashid
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mainContainer text-center">
                <div className="space-y-5">
                  <FaQuoteRight className="inline-block primary-color text-2xl"></FaQuoteRight>
                  <article className="text-base secondary-color">
                    Over the years, we have had the privilege of working with
                    leading brands both domestically and internationally. This
                    experience has not only honed our skills but has also
                    provided us with valuable insights into various industries,
                    enabling us to deliver strategies that deliver tangible
                    results.
                  </article>
                  <h2 className="text-2xl font-semibold primary-color">
                    MD. Rumanur Rashid
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
