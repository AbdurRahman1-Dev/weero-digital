"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaBars, FaCross, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="group " data-aos="fade-up-right" data-aos-duration="400">
        <Link href={"/#home"}>
          Home
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="500">
        <Link href={"/#about"}>
          About
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100  duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="600">
        <Link href={"/#service"}>
          Services
          <FaArrowRight className="group-hover:translate-x-2  opacity-0 group-hover:opacity-100 duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="700">
        <Link href={"/#projects"}>
          Project
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100  duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="800">
        <Link href={"/#team"}>
          Team
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100  duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="900">
        <Link href={"/#packages"}>
          Packages
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="950">
        <Link href={"/#client"}>
          Client
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 duration-200 inline-block ms-1" />
        </Link>
      </li>
      <li className="group " data-aos="fade-up-right" data-aos-duration="1000">
        <Link href={"/contact"}>
          Contact
          <FaArrowRight className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 duration-200 inline-block ms-1" />
        </Link>
      </li>
    </>
  );
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <nav className="z-50">
        <div className="z-50 flex justify-between items-center container mx-auto py-3 px-2 md:px-0">
          <div>
            <Link href={"/"}>
              <p className="primary-color font-semibold md:text-2xl  ps-4">
                Weero
              </p>
              <p className="md:text-3xl text-xl primary-color font-semibold -mt-3">
                DIgItal
              </p>
            </Link>
          </div>
          <div className="z-50 ">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="text-2xl primary-color"></FaTimes>
              ) : (
                <FaBars className="text-2xl primary-color"></FaBars>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="fixed z-[999] top-0 left-0 primary-color-bg w-[80%] h-screen md:w-1/3 md:rounded-e-full"
        >
          <div className=" w-full h-screen flex ps-5 md:ps-10 items-center">
            <div className="space-y-5 ">
              <button
                className="flex w-full justify-end"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaTimes className="ms-10 text-2xl inline-block text-white  hover:text-black hover:scale-[1.01] duration-300 text-end"></FaTimes>
              </button>
              <h2 className="md:text-3xl text-2xl font-bold uppercase text-white ">
                Weero Digital
              </h2>

              <ul className="space-y-3 text-lg md:text-xl text-white">
                {navLinks}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
