import React from "react";
import img from "../photo/banner.png";
const About = () => {
  return (
    <div className="min-h-[90vh] max-sm:mt-[20vh] w-full mx-auto flex justify-center flex-col items-center">
      <h3 className="font-mon capitalize text-5xl text-center mt-10">About us</h3>
      <div className="w-full max-sm:flex-col max-md:flex-col max-sm:mt-[10vh] flex items-center justify-center h-full  mx-auto ">
        <img src={img} className=" w-[30%] max-sm:w-[80%] max-md:w-[70%]  rounded-lg" alt="" />
        <div className="w-full h-full flex justify-end max-sm:justify-center max-md:justify-center items-center ">
          <div className="border-2 border-[#091732] rounded-lg w-[80%] h-[80%] p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nesciunt enim quibusdam quos fuga suscipit nulla doloribus incidunt fugit pariatur, recusandae eligendi repudiandae quaerat, distinctio quidem quas minus blanditiis, consequatur voluptates. Minus beatae ratione officiis commodi, dolor ducimus sunt dolores quasi eveniet exercitationem dignissimos! Quas, a recusandae. Unde soluta dicta libero repellat ipsum! Nobis explicabo minima odit nam, quae quis cupiditate ex perspiciatis vel repellat dicta repudiandae, eligendi illum eius soluta ab veniam maxime quibusdam quidem magnam ipsam suscipit obcaecati voluptate. Necessitatibus vero, ipsa, eos autem exercitationem pariatur fugit ipsum odit eius maxime, repudiandae optio nisi ullam. Maiores, eligendi recusandae.</div>
        </div>
      </div>
    </div>
  );
};

export default About;
