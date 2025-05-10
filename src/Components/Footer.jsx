import React from "react";
import logo from "../Assets/Logo.png";
import instaIcon from "../Assets/Frame 48096163.png";
import FbIcon from "../Assets/Frame 48096166.png";
import LinkedInIcon from "../Assets/Frame 48096167.png";
import phone from "../Assets/ri_whatsapp-fill.png";
import mail from "../Assets/ic_round-email.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="bg-black">
      <div className="container">
        <p className="text-white"> dlfsk {year}</p>
        <div className="flex flex-wrap flex-row px-[-12px] pt-[91px] pb-[50px]">
          <div className="lg:w-4/12 px-3 max-lg:w-6/12 max-md:w-full">
            <img src={logo} alt="error" />
            <p className="text-4 font-Plus_Jakarta text-[#CCCCCC]  max-w-[385px] mt-4">
              Join us on the journey to embrace the future. Experience the
              transformational impact of AI and automation with Algominds.
            </p>
            <div className="flex gap-3 mt-[24px]">
              <a href="https://www.instagram.com/" className=" hover:scale-105">
                {" "}
                <img src={instaIcon} alt="error" className="cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={FbIcon} alt="eror" className="cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/checkpoint/challenge/AgFinrpWtbHzSQAAAZavK3yGc2m9alrsYIBvBv2XlTQcFaV99bmG-g05nB8u_HD4pe-m5y4Sn7ty81H49o16i-sZY7AQTw?ut=3l9brwMLMFdrM1">
                <img src={LinkedInIcon} alt="eror" className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="lg:w-2/12 flex flex-col gap-3 max-lg:w-6/12 px-3 max-md:w-full">
            <div className="text-4 text-[#CCCCCC] font-bold font-Plus_Jakarta cursor-pointer">
              Main Menu
            </div>
            <div className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white ">
              Home
            </div>
            <div className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white ">
              About Us
            </div>
            <div className="text-4   font-Plus_Jakarta cursor-pointer text-[#CCCCCC] hover:text-white ">
              How it Works
            </div>
            <div className="text-4  font-Plus_Jakarta cursor-pointer text-[#CCCCCC] hover:text-white ">
              Why Choose Us
            </div>
          </div>
          <div className="lg:w-3/12 flex flex-col gap-3   px-3 max-lg:w-6/12 max-lg:mt-[30px] max-md:w-full">
            <div className="text-4 text-white font-bold font-Plus_Jakarta cursor-pointer">
              Legal
            </div>
            <div className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white ">
              Terms
            </div>
            <div className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white ">
              Privacy
            </div>
          </div>
          <div className="lg:w-3/12 flex flex-col gap-3 max-lg:w-6/12 max-lg:mt-[30px] max-md:w-full">
            <div className="text-4 text-white font-bold font-Plus_Jakarta cursor-pointer">
              Contact Info
            </div>
            <div className="flex gap-4">
              <img src={phone} alt="error" />

              <a
                href="tel:+12345678990"
                className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white "
              >
                +0000000000
              </a>
            </div>
            <div className="flex gap-4">
              <img src={mail} alt="error" />
              <div className="text-4 text-[#CCCCCC]  font-Plus_Jakarta cursor-pointer hover:text-white ">
                info@noblemindit.gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="block bg-[#A158EA] h-[1px] w-[455px]"></div>
      </div>
    </section>
  );
}

export default Footer;
