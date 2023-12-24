import Image from "next/image";
import hero from "../../../public/hero.png";
import TitlebarLeft from "../shared/TitlebarLeft";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 primary-color-bg text-white overflow-hidden"
    >
      <div className="space-y-10 " data-aos="fade-up" data-aos-duration="200">
        <TitlebarLeft title={" ABOUT US"}></TitlebarLeft>

        <div className="mainContainer md:flex justify-between items-center gap-5">
          <div data-aos="flip-up" className="md:w-1/2">
            <Image src={hero} alt="about" />
          </div>
          <div className="md:w-1/2 space-y-2 md:space-y-4 pt-3">
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-3xl md:text-5xl font-bold uppercase"
            >
              About us
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              className="font-semibold text-base md:text-lg"
            >
              At Weero Digital, we are passionate about transforming ideas into
              visually stunning and impactful digital experiences.
            </p>{" "}
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className=" text-base md:text-lg secondary-color"
            >
              With a focus on creativity, innovation, and flawless execution, we
              help our clients achieve their digital goals in the most effective
              way possible. Our team of talented designers, developers, and
              strategists work closely with each client to understand their
              unique vision and objectives.
            </p>{" "}
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className=" text-base md:text-lg secondary-color"
            >
              We believe that collaboration and open communication are key to We
              believe that collaboration and open communication are key to
              delivering exceptional results. Whether its developing a visually
              striking website, creating compelling motion graphics, or
              designing a brand identity that resonates with your target
              audience, we are dedicated to exceeding expectations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
