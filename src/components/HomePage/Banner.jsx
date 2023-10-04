import Image from "next/image";
import hero from "../../../public/hero.webp";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const Banner = () => {
  // AOS.init();
  return (
    <section className=" z-10 bg-white">
      <div className="md:flex justify-between gap-5 items-center flex flex-col-reverse md:flex-row overflow-hidden mainContainer">
        <div data-aos="fade-right" className=" md:w-1/2 py-5">
          <p className="primary-color font-bold">WE ARE</p>
          <h1 data-aos="fade-up-right" className="text-5xl font-bold">
            Weero Digital
          </h1>
          <p
            data-aos="fade-up-right"
            className="text-base secondary-color my-5"
          >
            Weero Digital is a leading digital creative agency. With a team of
            highly skilled professionals, Weero Digital is a leading digital
            creative agency. With a team of highly skilled professionals, we
            specialize in crafting captivating digital media, static and motion
            graphic content, web design and development, logo creation, brochure
          </p>

          <button className="">
            {" "}
            <Link
              className="group btn-style "
              href={"#about"}
              data-aos="fade-up-right"
            >
              ABOUT US
              <FaArrowRight className="group-hover:translate-x-2  duration-200" />
            </Link>
          </button>
        </div>
        <div data-aos="fade-left" className="md:w-1/2 flex justify-end">
          <Image className="w-[400px]" width={300} src={hero} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
