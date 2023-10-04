import About from "@/components/HomePage/About";
import Banner from "@/components/HomePage/Banner";
import Brands from "@/components/HomePage/Brands";
import Packages from "@/components/HomePage/Packages";
import Projects from "@/components/HomePage/Projects";
import Service from "@/components/HomePage/Service";
import Team from "@/components/HomePage/Team";
import Testimonial from "@/components/HomePage/Testimonial";

const page = () => {
  return (
    <main className="z-50 mb-[250px]">
      <Banner />
      <About />
      <Service />
      <Projects />
      <Team />
      <Packages />
      <Testimonial />
      <Brands></Brands>
    </main>
  );
};

export default page;
