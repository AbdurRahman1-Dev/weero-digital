import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className=" z-10 bg-white h-fit md:h-screen w-full">
      <div className="overflow-hidden w-full mainContainer md:flex justify-between items-center gap-10 h-full">
        <div data-aos="fade-right" className=" md:w-1/2 py-5">
          <h3 className="text-2xl my-5 md:text-3xl font-bold primary-color">
            Get In Touch
          </h3>

          <div>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-b-gray-400 active:border-b w-full py-4 focus:border-b-[#004b8e] "
              ></input>{" "}
              <input
                type="email"
                placeholder="Email"
                className="border-b border-b-gray-400 active:border-b w-full py-4 focus:border-b-[#004b8e] "
              ></input>
              <textarea
                placeholder="Message"
                className="border-b h-[180px] border-b-gray-400 active:border-b w-full py-4 focus:border-b-[#004b8e] "
              ></textarea>
              <input
                className="btn-style "
                type="submit"
                value={"Send Message"}
              ></input>
            </form>
          </div>
        </div>
        <div data-aos="fade-left" className="md:w-1/2 py-5">
          <h3 className="text-2xl my-5 md:text-3xl font-bold primary-color">
            Contact Info.
          </h3>
          <div className=" md:flex justify-between gap-5 h-full">
            <div className="space-y-4">
              <h5 className="text-xl font-bold">Say Hello.</h5>
              <p className="secondary-color font-semibold">
                {" "}
                weerodigital@gmail.com
                <br></br>
                letstalk@weerodigital.com
              </p>

              <p className="secondary-color font-semibold">
                +880 1660-136878
                <br />
                +880 1606-104403
              </p>
            </div>

            <div className="space-y-4">
              <h5 className="text-xl font-bold">Address</h5>
              <address className="secondary-color font-semibold">
                <h5 className="text-xl font-bold pb-1"> Bangladesh Office</h5>
                Holy Garden (A1) <br /> House: 2/1, Road: 2, Block: C,
                <br /> Mirpur: 2 Dhaka-1216, Bangladesh
              </address>{" "}
              <address className="secondary-color font-semibold">
                <h5 className="text-xl font-bold pb-1"> DUBAI OFFICE</h5>
                Office - M16 <br /> Sky Business Centre
                <br />
                Nad Al Hamar, Dubai UAE
              </address>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-5 text-2xl primary-color">
              <FaFacebook></FaFacebook>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>
              <FaBehance></FaBehance>
              <FaTwitter></FaTwitter>
              <FaDribbble></FaDribbble>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
