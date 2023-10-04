import m1 from "../../../public/team/CEO.webp";
import m2 from "../../../public/team/Assistant-Manager.webp";
import m3 from "../../../public/team/hr-admin.webp";
import m4 from "../../../public/team/Web-Developer.webp";
import m5 from "../../../public/team/akash.webp";
import Image from "next/image";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <section
      id="team"
      className="space-y-10 py-20 z-20 bg-white overflow-hidden"
    >
      <div
        data-aos="fade-left"
        className="flex gap-2 items-center justify-end  "
      >
        <div className="font-bold text-base uppercase secondary-color">
          Our TEam | Weero Digital
        </div>
        <div className="w-[20%] h-[1px] bg-gray-500 "></div>
      </div>

      <div className="mainContainer md:flex justify-between items-center gap-10">
        <div data-aos="fade-up-right" className="md:w-1/2 space-y-5">
          <h2
            data-aos="fade-up-right"
            className="text-2xl md:text-5xl font-bold "
          >
            Our Talents
          </h2>
          <p data-aos="fade-up-right" className="font-semibold text-xl ">
            At Weero Digital, we are passionate about transforming ideas into
            visually stunning and impactful digital experiences.
          </p>{" "}
          <p
            data-aos="fade-up-right"
            className="font-semibold text-base secondary-color"
          >
            With a focus on creativity, innovation, and flawless execution, we
            help our clients achieve their digital goals in the most effective
            way possible. Our team of talented designers, developers, and
            strategists work closely with each client to understand their unique
            vision and objectives.
          </p>
          <button
            data-aos="fade-up-right"
            className="btn-style group uppercase"
          >
            ALL Members
            <FaArrowRight className="group-hover:translate-x-2  duration-200" />
          </button>
        </div>
        <div className="md:w-1/2">
          <div
            data-aos="fade-up-left"
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div
              data-aos="fade-up-left"
              className="w-[200px] h-[250px] bg-gray-200 relative group overflow-hidden"
            >
              <Image
                className="group-hover:scale-105 overflow-hidden duration-500 absolute bottom-0 left-0"
                src={m1}
                width={300}
                alt="team"
              ></Image>
              <div className="absolute w-full opacity-0 group-hover:opacity-100 duration-500 h-full top-0 left-0 bg-[#0000008f] flex items-center justify-center">
                <div className="text-white translate-y-10 group-hover:translate-y-0 duration-500 text-center space-y-2">
                  <h4 className="text-xl">MD. Rumanur Rashid</h4>
                  <p className="text-gray-300">Founder, CEO</p>
                  <FaLinkedin className="inline-block text-xl mx-1"></FaLinkedin>
                  <FaGithub className="inline-block text-xl mx-1"></FaGithub>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up-left"
              className="w-[200px] h-[250px] bg-gray-200 relative group overflow-hidden mt-5"
            >
              <Image
                className="group-hover:scale-105 overflow-hidden duration-500 absolute bottom-0 left-0"
                src={m2}
                width={300}
                alt="team"
              ></Image>
              <div className="absolute w-full opacity-0 group-hover:opacity-100 duration-500 h-full top-0 left-0 bg-[#0000008f] flex items-center justify-center">
                <div className="text-white translate-y-10 group-hover:translate-y-0 duration-500 text-center space-y-2">
                  <h4 className="text-xl">MD. Rumanur Rashid</h4>
                  <p className="text-gray-300">Founder, CEO</p>
                  <FaLinkedin className="inline-block text-xl mx-1"></FaLinkedin>
                  <FaGithub className="inline-block text-xl mx-1"></FaGithub>
                </div>
              </div>
            </div>{" "}
            <div
              data-aos="fade-up-left"
              className="w-[200px] h-[250px] bg-gray-200 relative group overflow-hidden "
            >
              <Image
                className="group-hover:scale-105 overflow-hidden duration-500 absolute bottom-0 left-0"
                src={m3}
                width={300}
                alt="team"
              ></Image>
              <div className="absolute w-full opacity-0 group-hover:opacity-100 duration-500 h-full top-0 left-0 bg-[#0000008f] flex items-center justify-center">
                <div className="text-white translate-y-10 group-hover:translate-y-0 duration-500 text-center space-y-2">
                  <h4 className="text-xl">MD. Rumanur Rashid</h4>
                  <p className="text-gray-300">Founder, CEO</p>
                  <FaLinkedin className="inline-block text-xl mx-1"></FaLinkedin>
                  <FaGithub className="inline-block text-xl mx-1"></FaGithub>
                </div>
              </div>
            </div>{" "}
            <div
              data-aos="fade-up-left"
              className="w-[200px] h-[250px] bg-gray-200 relative group overflow-hidden mt-5"
            >
              <Image
                className="group-hover:scale-105 overflow-hidden duration-500 absolute bottom-0 left-0"
                src={m5}
                width={300}
                alt="team"
              ></Image>
              <div className="absolute w-full opacity-0 group-hover:opacity-100 duration-500 h-full top-0 left-0 bg-[#0000008f] flex items-center justify-center">
                <div className="text-white translate-y-10 group-hover:translate-y-0 duration-500 text-center space-y-2">
                  <h4 className="text-xl">MD. Rumanur Rashid</h4>
                  <p className="text-gray-300">Founder, CEO</p>
                  <FaLinkedin className="inline-block text-xl mx-1"></FaLinkedin>
                  <FaGithub className="inline-block text-xl mx-1"></FaGithub>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
