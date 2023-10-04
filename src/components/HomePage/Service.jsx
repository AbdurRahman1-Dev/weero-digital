import {
  FaChartLine,
  FaCheckCircle,
  FaLaptopCode,
  FaLongArrowAltRight,
  FaPenNib,
} from "react-icons/fa";

const Service = () => {
  return (
    <section id="service" className="py-20 z-10 bg-white overflow-hidden">
      <div className="space-y-20 " data-aos="fade-up" data-aos-duration="300">
        <div
          data-aos="fade-left"
          className=" flex gap-2 items-center justify-end  "
        >
          <div className="font-bold text-base uppercase secondary-color">
            OUR Services | Weero Digital
          </div>
          <div className="w-[20%] h-[1px] bg-gray-500 "></div>
        </div>

        <div className="mainContainer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className=" space-y-5 p-5 py-12 group border-x  border-x-slate-400 hover:shadow-2xl  hover:border-x-slate-800 duration-200"
          >
            <FaPenNib className="text-3xl inline-block"></FaPenNib>
            <h3 className="text-2xl font-semibold">CREATIVE GRAPHICS DESIGN</h3>
            <p className="text-base secondary-color">
              Maintain a visually pleasing and consistent aesthetic by focusing
              on your customers.
            </p>
            <ul className="space-y-3 secondary-color">
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
            <FaLongArrowAltRight className="text-4xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-500 bg-[#004b8e] p-2 rounded-full text-white hover:bg-[#002f58]" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="space-y-5 p-5 py-12 group border-y  border-y-slate-400  hover:shadow-2xl  hover:border-y-slate-800 duration-200"
          >
            <FaLaptopCode className="text-3xl  inline-block"></FaLaptopCode>
            <h3 className="text-2xl font-semibold">DEVELOPMENT</h3>
            <p className="text-base secondary-color">
              Ensure a visually cohesive and aesthetically pleasing web presence
              by prioritizing your customers' needs and preferences.
            </p>

            <ul className="space-y-3 secondary-color">
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
            <FaLongArrowAltRight className="text-4xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-500 bg-[#004b8e] p-2 rounded-full text-white hover:bg-[#002f58]" />
          </div>{" "}
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className=" space-y-5 p-5 py-12 group border-x  border-x-slate-400 hover:shadow-2xl  hover:border-x-slate-800 duration-200"
          >
            <FaChartLine className="text-3xl inline-block"></FaChartLine>
            <h3 className="text-2xl font-semibold">STRATEGIC PLANNING</h3>
            <p className="text-base secondary-color">
              Center your customers' interests and preferences in your digital
              marketing strategy.
            </p>
            <ul className="space-y-3 secondary-color">
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
            <FaLongArrowAltRight className="text-4xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-500 bg-[#004b8e] p-2 rounded-full text-white hover:bg-[#002f58]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
