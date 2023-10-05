import { FaChartLine, FaLaptopCode, FaPenNib } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import TitlebarRight from "../shared/TitlebarRight";

const Service = () => {
  // service data
  const servicesData = [
    {
      name: "CREATIVE GRAPHICS DESIGN",
      description:
        "Maintain a visually pleasing and consistent aesthetic by focusing on your customers.",
      services: [
        "Logo, Brochure & leaflet design.",
        "Social media content design.",
        "Banner and poster design.",
      ],
      animationDur: "700",
      icon: <FaPenNib className="text-3xl inline-block"></FaPenNib>,
    },
    {
      name: "DEVELOPMENT",
      description:
        "Ensure a visually cohesive and aesthetically pleasing web presence by prioritizing your customer needs and preferences.",
      services: ["Websites", "Mobile Apps", "Desktop Apps"],
      animationDur: "800",
      icon: <FaLaptopCode className="text-3xl inline-block"></FaLaptopCode>,
    },
    {
      name: "STRATEGIC PLANNING",
      description:
        "Center your customers interests and preferences in your digital marketing strategy.",
      services: [
        "Digital campaign.",
        "Brand identity.",
        "Online advertising solutions.",
      ],
      animationDur: "900",
      icon: <FaChartLine className="text-3xl inline-block"></FaChartLine>,
    },
  ];

  return (
    <section id="service" className="py-20 z-10 bg-white overflow-hidden">
      <div className="space-y-20 " data-aos="fade-up" data-aos-duration="300">
        <TitlebarRight title={"OUR Services "}></TitlebarRight>

        <div className="mainContainer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* services */}

          {servicesData?.map((service, i) => (
            <ServiceCard service={service} key={i}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
