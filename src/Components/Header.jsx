import { Suspense, useRef, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImg from "../photo/banner.png";
import { FaGithub, FaInstagram, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Header = ({ dark, handle, trueBox }) => {
  const contact = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      opacity: 0,
      y: 300,
    },
  };

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Beckend Developer"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });
  return (
    <>
      <div id="home" className={dark ? " flex items-center justify-between mt-5 h-[90vh] rounded-md m-auto duration-1000 w-[98%] max-sm:min-h-[150vh] max-md:h-[100vh]" : "flex items-center rounded-md justify-between mt-5  h-[90vh]  m-auto duration-1000 w-[98%]   max-sm:min-h-[150vh] max-md:h-[170vh] "}>
        <div className="flex max-sm:w-[85%] mx-auto select-none flex-col w-full">
          <div className=" h-[45vh] max-sm:h-[50vh] flex w-full  mt-[10vh] max-sm:mt-0 max-md:pt-0 max-md:h-[10vh]  items-center  max-sm:pt-0 max-sm:flex-col  justify-between max-sm:justify-start  ">
          
            <div className="w-full mb-10 max-sm:mb-0 flex  items-center h-full ">
              <motion.h1 className="text-5xl  font-mono  max-sm:text-2xl max-md:text-3xl" transition={{ duration: 1 }} variants={contact} initial="left" animate="animate">
                Hi, I'm a <br /> <span className=" text-5xl max-md:text-3xl max-sm:text-2xl font-bold ">{text}</span>
                <Cursor />
              </motion.h1>
            </div>

            <div className="w-[40%] max-md:h-[100%] max-sm:mt-0 max-md:mt-0 max-lg:mt-0 max-sm:w-full max-md:w-[60vw] ">
              <img
                className={dark ? " hover:shadow-lg hover:shadow-[#b405d7a1]  rounded-md shadow-md shadow-[#b405d7]" : "  rounded-lg shadow-lg shadow-[#091732] hover:shadow-xl hover:shadow-[#091732ab]"}
                src={bannerImg}
                style={{
                  backgroundImage: `url(${bannerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
                alt="bannerImg"
              />
            </div>
          </div>

          <div className="max-sm:mt-[45vh] max-md:mt-[20vh]">
            <div className="">
              <p className="text-2xl uppercase font-mono">find me in</p>
              <div className="flex  capitalize gap-10 text-white  ">
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-4xl" />
                </a>
                <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl" />
                </a>
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTelegram className="text-4xl" />
                </a>
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-4xl" />
                </a>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-2xl uppercase font-mono">
                BEST SKILL ON <span className="text-3xl font-bold">mern</span>
              </p>
              <div className="flex capitalize gap-10 text-white ">
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="">
                  <DiMongodb className="text-4xl" />
                </a>
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="">
                  <SiExpress className="text-4xl" />
                </a>
                <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="">
                  <FaReact className="text-4xl" />
                </a>
                <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="">
                  <FaNode className="text-4xl " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="w-full relative justify-center flex " to="contact">
        <span className="bg-[#010b1f] w-[50px] flex rounded-full justify-center items-center h-[50px] animate-ping"></span>
        <FaRegArrowAltCircleDown className=" absolute top-2 text-4xl animate-bounce" />
      </ScrollLink>
    </>
  );
};

export default Header;
