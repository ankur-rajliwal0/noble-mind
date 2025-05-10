import React from "react";
import layers from "../Assets/Company logo.png";
import catelog from "../Assets/Company logo (1).png";
import quoent from "../Assets/Company logo (2).png";
import cicoole from "../Assets/Company logo (3).png";
import cyspus from "../Assets/Company logo (4).png";
import ellups from "../Assets/Ellipse 3906.png";
import ellups2 from "../Assets/Ellipse 3907.png";

function Join() {
  return (
    <section className="bg-[#EFEFEF] relative">
      <img src={ellups} alt="" className=" absolute end-0 top-0" />
      <img src={ellups2} alt="" className=" absolute start-0 bottom-0" />
      <div className="container">
        <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[105px] pb-[116px] ">
          <div className="lg:w-6/12 md:w-full flex justify-center px-3">
            <h3 className="text-[48px] font-Plus_Jakarta lg:max-w-[456px] font-bold mt-[54px] max-md:text-[30px] ">
              Join 4,000+ companies{" "}
              <span className="text-[#9262ED]">Already Growing</span>
            </h3>
          </div>
          <div className="lg:w-6/12 md:mt-[20px] md:w-full  max-md:mt-[30px] px-3 ">
            <div className="flex lg:gap-[52px]  flex-wrap ">
              <img src={layers} alt="" />
              <img src={catelog} alt="" />
            </div>
            <div className="flex gap-[52px] md:mt-[20px] flex-wrap ml-[80px] mt-[47px] ">
              <img src={quoent} alt="" />
              <img src={cicoole} alt="" />
            </div>
            <div className="flex gap-[52px] md:mt-[20px] flex-wrap  mt-[47px] ">
              <img src={cyspus} alt="" />
              <img src={catelog} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
