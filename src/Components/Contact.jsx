import React, { useRef, useState } from "react";
import img from "../photo/contactImg.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineAlternateEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_93s0h3b", "template_c9uacpi", form.current, "f7_qewyU8VRyC8rSK").then(
      (result) => {
        email && Fname && message ? sendEmailjs() : warnEmailjs();
      },
      (error) => {
        errEmailjs();
      }
    );
  };

  const sendEmailjs = () => {
    toast.info("Xabar jonatildi!", {
      autoClose: 3000,
      position: "top-center",
      type: "success",
      theme: "black",
    });
  };
  const warnEmailjs = () => {
    toast.warn("Ma'lumotni to'g'ri toldiring !", {
      position: "top-center",
      autoClose: 3000,
      theme: "black",
    });
  };
  const errEmailjs = () => {
    toast.error("Error", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
    });
  };

  const text = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div id="contact" className=" mt-2  rounded-md w-[98%] mx-auto ">
      <div className="pt-10 w-[80%] mx-auto">
        <h1 className="text-center text-5xl capitalize font-mono  ">contact me</h1>
      </div>
      <div className="max-sm:flex-wrap max-md:flex-wrap max-lg:flex-wrap gap-10 flex items-center ">
        <div className="min-h-[80vh] m-auto mt-10  flex flex-col xl:flex-wrap w-full justify-center ">
          <ToastContainer />

          {email && Fname && message ? <ToastContainer className=" backdrop-blur-md rounded-lg" /> : <ToastContainer className=" backdrop-blur-md rounded-lg" />}
          <fieldset className="border-2 py-3 rounded-md w-full border-gray-500 px-5">
            <legend className="text-3xl capitalize font-mono">contact me</legend>
            <form ref={form} className="xl:w-2/3 flex justify-center w-[60%] flex-col  gap-y-2" onSubmit={sendEmail} value="Send">
              <div className="relative items-center flex mb-10">
                <input placeholder="" type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="user_email" className="border-2 w-full px-3 border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  @Email
                </label>
              </div>
              <div className="relative items-center flex mb-10">
                <input placeholder="" onChange={(e) => setFname(e.target.value)} value={Fname} type="text" name="user_name" className="border-2 w-full px-3 border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  Fullname
                </label>
              </div>
              <div className="relative items-center flex">
                <textarea placeholder="" onChange={(e) => setMessage(e.target.value)} value={message} name="message" className="border-2 resize-none p-3 w-full  border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer h-[100px] bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  Message
                </label>
              </div>

              <button onClick={sendEmail} className=" active:bg-[#0e26515f] border-gray-500 border-2 w-[50%] hover:brightness-110 uppercase hover:animate-pulse font-bold  py-3 px-6 rounded-md shadow-3xl shadow-white">
                send
              </button>
            </form>
          </fieldset>
        </div>

        <div className="w-full mt-14  flex  ">
          <div className="flex items-center justify-center rounded-lg w-full h-[53vh] ">
            <div className="flex w-full items-center justify-center relative h-[53vh]">
              <img alt="gallery" style={{ backgroundImage: `url(${img})` }} className="absolute rounded-lg w-full h-full object-cover object-center" src={img} />
              <div className=" relative z-10 w-full h-[53vh] backdrop-blur-md backdrop-brightness-90 opacity-0 rounded-lg hover:opacity-100">
                <p className="text-4xl w-full text-center">Direct</p>
                <div className="tracking-widest flex-col  flex gap-5 items-start w-[90%] mx-auto h-[70%] ">
                  <div className="flex items-center gap-2 text-white  ">
                    <span className=" bg-[#0c2341]  p-3 rounded-md hover:shadow-3xl  hover:shadow-white w-10">
                      <IoMdCall className="text-white" />
                    </span>
                    <a className="font-bold gap-5 relative no-underline after-line flex" href="tel:+">
                      +998 95 874 30 40
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-white ">
                    <span className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white w-10">
                      <MdOutlineAlternateEmail className="text-white" />
                    </span>
                    <a href="https://mail.google.com/mail/u/0/#inbox" className="underline">
                      nodirdev1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-end h-[10%] w-[90%] mx-auto capitalize gap-10 text-white  ">
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="text-2xl" />
                  </a>
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full text-white flex items-end  ">
          <div className="w-full border-2 border-gray-500 h-[53vh] rounded-md mb-10 " style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" backdrop-blur-sm backdrop-brightness-[35%] h-full p-3">
              <div className=" flex items-center  ">
                <img className="w-[100px] " src={img1} alt="" />
                <h3>Fullstack developer</h3>
              </div>

              <p className="text-2xl uppercase font-mono">find me in</p>

              <div className="flex gap-y-3 flex-col">
                <div className="flex gap-x-5 items-center ">
                  <span className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white w-10">
                    <FaPhoneAlt />
                  </span>
                  <span className=" capitalize underline">+998 77 411 10 96</span> <span className=" capitalize"> my phone number</span>
                </div>
               
              </div>
              <div className="pt-10 ">
                <div className="flex items-end h-full capitalize gap-10 text-white  ">
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-2xl" />
                  </a>
                  <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className="text-2xl" />
                  </a>
                  <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
