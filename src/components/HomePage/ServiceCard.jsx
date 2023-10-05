import { FaCheckCircle, FaLongArrowAltRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={service?.animationDur}
      className=" space-y-5 p-5 py-12 group border-x  border-x-slate-400 hover:shadow-2xl  hover:border-x-slate-800 duration-500"
    >
      {service?.icon}
      <h3 className="text-2xl font-semibold">{service?.name}</h3>
      <p className="text-base secondary-color">{service?.description}</p>
      <ul className="space-y-3 secondary-color">
        {service?.services?.map((item, i) => (
          <li key={i}>
            <FaCheckCircle className="inline-block me-2 primary-color" />
            {item}
          </li>
        ))}
      </ul>
      <FaLongArrowAltRight className="text-4xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-500 bg-[#004b8e] p-2 rounded-full text-white hover:bg-[#002f58]" />
    </div>
  );
};

export default ServiceCard;
