import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import logo from "../photo/logo.png";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Navbar = ({ dark, trueBox, handle, darkk, burger, setBurger }) => {
  const [wit, setWit] = useState(false);

  const text = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };
  const text1 = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };
  const text2 = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };

  const text4 = {
    animate: {
      opacity: 1,
      transition: {
        duration: 1.9,
      },
    },
    left: {
      opacity: 0,
    },
  };
  const trueFalse = () => {
    setBurger(!burger);
  };

  return (
    <nav>
      <div className={burger ? "fixed backdrop-brightness-50 backdrop-blur-md z-20 top-1 w-[95%]   rounded-full px-5 mx-auto flex min-h-[10vh] items-center     max-sm:flex-col max-sm:right-0  max-sm:min-h-[40vh] max-sm:w-full max-sm:rounded-sm         max-md:flex-col max-md:right-0 max-md:min-h-[40vh] max-md:py-2 max-md:w-full max-md:rounded-sm         max-lg:flex-col max-lg:right-0 max-lg:min-h-[40vh] max-lg:py-2 max-lg:w-full max-lg:rounded-sm " : "fixed backdrop-brightness-50 backdrop-blur-md w-[95%] rounded-full    z-20 top-1 mx-auto px-5 flex  min-h-[10vh] items-center gap-10   max-sm:flex-col max-sm:right-0 max-sm:h-[10vh] max-sm:w-full max-sm:rounded-sm         max-md:flex-col max-md:right-0 max-md:h-[10vh] max-md:w-full max-md:rounded-sm "}>
        <motion.div initial="left" animate="animate" variants={text4} className=" max-sm:flex max-md:flex max-lg:flex hidden  text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full    max-lg:flex-col max-lg:w-full">
          <ScrollLink className=" rounded-full flex w-full  items-center h-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
            <img to="home" className=" w-[50px] cursor-pointer rounded-xl" src={logo} alt="" />
          </ScrollLink>

          <div className=" w-full hidden max-sm:flex  max-lg:flex max-md:flex ">
            {burger ? (
              <div className="w-full ">
                <IoMdClose className=" text-3xl absolute z-[100] top-3 right-10" onClick={trueFalse} />
                <ul className={dark ? "flex flex-col w-full mt-4 capitalize gap-3 text-white " : "flex flex-col w-full mt-4 capitalize gap-3 text-slate-400 "}>
                  <motion.li onClick={trueFalse} animate="animate" initial="left" variants={text}>
                    <ScrollLink className=" bg-[#112449]  flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full max-lg:w-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
                      home
                    </ScrollLink>
                  </motion.li>
                  <motion.li animate="animate" initial="left" variants={text1}>
                    <ScrollLink className=" bg-[#112449]  flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full max-lg:w-full" onClick={handle} duration={1000} smooth={trueBox} to="projek">
                      project
                    </ScrollLink>
                  </motion.li>
                  <motion.li animate="animate" initial="left" variants={text1}>
                    <ScrollLink className=" bg-[#112449]  flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full max-lg:w-full" onClick={handle} duration={1000} smooth={trueBox} to="texnalogy">
                      texnalogy
                    </ScrollLink>
                  </motion.li>
                  <motion.li animate="animate" initial="left" variants={text2}>
                    <ScrollLink className=" bg-[#112449]  flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full max-lg:w-full" onClick={handle} duration={1000} smooth={trueBox} to="contact">
                      contact
                    </ScrollLink>
                  </motion.li>
                </ul>
                <motion.div animate="animate" initial="left" variants={text2} className=" w-full  max-sm:w-full bg-[#112449] max-sm:mt-4 max-sm:rounded-full      max-md:w-full max-md:mt-2 max-md:rounded-full       max-lg:w-full max-lg:mt-2 max-lg:rounded-full">
                  <ul className={dark ? "flex gap-5  w-[300px] items-center     max-sm:w-full max-sm:justify-between      max-md:w-full max-md:justify-between" : "flex gap-5  w-[300px] items-center     max-sm:w-full max-sm:justify-between      max-md:w-full max-md:justify-between text-slate-400"}>
                    <a href="/Shamsitdinov.pdf" download="/Shamsitdinov.pdf">
                      <button className="flex relative bg-[#0a0c358a] px-3 py-1 rounded-full justify-between gap-3 items-center">
                        Resume <div className=" absolute -top-3 opacity-0 duration-700 hover:opacity-100  w-[150px] h-[10vh] text-end -right-4 text-[10px] text-[#b405d7] ">277 KB</div> <LiaCloudDownloadAltSolid className="text-3xl text-[#b405d7]" />
                      </button>
                    </a>
                    <div className=" duration-1000  text-3xl">
                      {dark ? (
                        <button className="bg-[#0a0c358a]  duration-500  rounded-full p-1" onClick={darkk}>
                          <CiLight />
                        </button>
                      ) : (
                        <button className="bg-[#0a0c358a]  duration-500 rounded-full p-1" onClick={darkk}>
                          <CiDark />
                        </button>
                      )}
                    </div>
                  </ul>
                </motion.div>
              </div>
            ) : (
              <RxHamburgerMenu aria-hidden="true" className="  text-3xl absolute z-[100] top-3 right-10  " onClick={trueFalse} />
            )}
          </div>
        </motion.div>

        <div className=" fixed max-sm:hidden max-md:hidden max-lg:hidden  z-50 top-1   rounded-full mx-auto backdrop-brightness-50 w-[95%] px-5 flex min-h-[10vh] items-center backdrop-blur-lg ">
          <motion.div initial="left" animate="animate" variants={text4} className=" max-lg:hidden max-sm:hidden max-md:hidden flex w-full items-center gap-24">
            <ScrollLink className="flex w-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
              <img to="home" className=" w-[50px] cursor-pointer rounded-xl" src={logo} alt="" />
            </ScrollLink>
            <ul className="flex capitalize gap-10 justify-center  ">
              <motion.li animate="animate" initial="left" variants={text}>
                <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer " to="home">
                  home
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer " duration={1000} smooth={trueBox} to="projek">
                  project
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer " duration={1000} smooth={trueBox} to="texnalogy">
                  texnalogy
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text2}>
                <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5 " to="contact">
                  contact
                </ScrollLink>
              </motion.li>
            </ul>
            <motion.div animate="animate" initial="left" variants={text2} className=" w-full">
              <ul className="flex gap-5  w-[300px] items-center justify-end">
                <a href="/Shamsitdinov.pdf" download="Shamsitdinov">
                  <button className={dark ? "flex relative duration-500 bg-[#0a0c358a] backdrop-brightness-50 px-3 py-1 rounded-full justify-between gap-3 items-center" : "flex relative bg-[#626a78] duration-500 backdrop-brightness-50 px-3 py-1 rounded-full justify-between gap-3 items-center"}>
                    Resume <div className=" absolute -top-3 opacity-0 duration-700 hover:opacity-100  w-[150px] h-[10vh] text-end -right-4 text-[10px] text-[#b405d7] ">277 KB</div> <LiaCloudDownloadAltSolid className="text-3xl text-[#b405d7]" />
                  </button>
                </a>
                <div className=" duration-1000 text-3xl">
                  {dark ? (
                    <button className="bg-[#0a0c358a] duration-500  rounded-full p-1" onClick={darkk}>
                      <CiLight />
                    </button>
                  ) : (
                    <button className="bg-[#626a78] duration-500 rounded-full p-1" onClick={darkk}>
                      <CiDark />
                    </button>
                  )}
                </div>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
