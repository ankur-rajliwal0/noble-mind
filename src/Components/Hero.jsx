import React from "react";
import ilups from "../Assets/Ellipse 3915.png";
import ilups2 from "../Assets/Ellipse 3914.png";
import NavBar from "./NavBar";
import ellups from "../Assets/Ellipse 3.png";
import container from "../Assets/containeer (1).png";

function Hero() {
  return (
    <>
      <NavBar />
      <section className="relative">
        <img
          src={ilups}
          alt=""
          className="  -z-10  absolute top-[-135px]"
        />
        <img src={ilups2} alt="" className="absolute end-0 top-[-70px]" />

        <div className="section mt-[44px] relative">
          <div className="container">
            <div className=" text-center flex justify-center items-center flex-col">
              <h1 className="font-extrabold text-[64px] font-Plus_Jakarta min-lg:text-center max-w-[948px] max-xl:text-[50px] max-xl:max-w-[740px] max-sm:text-[30px] max-sm:max-w-[640px]">
                Elevate Your Solutions with{" "}
                <span className="text-[#9264EE]">Noble Mind IT</span>
              </h1>
              <p className="mt-4 max-w-[829px] text-4 font-Plus_Jakarta  max-sm:text-[10px]">
                At Noble Mind IT, we're dedicated to taking your IT solutions to
                new heights. In today's ever-evolving technological landscape,
                having a trusted partner to elevate your IT infrastructure is
                paramount.
              </p>
            </div>
            <div className=" relative mt-[67px] max-sm:mt-[33px] ">
              <div className="relative">
                {" "}
                <img
                  src={ellups}
                  alt=""
                  className="absolute left-[-50px] z-[-10] top-[-50px] max-md:hidden "
                />
                <img
                  src={container}
                  alt=""
                  className=" mx-auto rounded-[16px] border-solid border-transparent w-full"
                />
                <img
                  src={ellups}
                  alt=""
                  className="absolute right-[-40px] bottom-[-50px] z-[-10] max-md:hidden"
                />
              </div>

              <div className="flex justify-center mb-[47px] mt-[45px]">
                {" "}
                <button className="px-[42px] py-[16px] rounded-[61px] text-white mx-auto font-Plus_Jakarta  bg-[#9860ED]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
