import React from "react";
const Footer = ({ dark }) => {
  return (
    <div className={dark ? " my-2 rounded-full mx-auto w-[98%] backdrop-brightness-50 backdrop-blur-md h-20" : "backdrop-brightness-50 backdrop-blur-md h-20 my-2 rounded-full w-[98%] mx-auto "}>
      <div className="flex justify-center items-center h-full">
        <p>({new Date().toLocaleDateString()})</p>
      </div>

   
    </div>
  );
};

export default Footer;
