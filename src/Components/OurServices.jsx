import React from "react";
import illups from "../Assets/Ellipse 3914 (1).png";
import illups2 from "../Assets/Ellipse 3915 (1).png";
import icon from "../Assets/icon.png";
import icon1 from "../Assets/icon (1).png";
import icon2 from "../Assets/icon (2).png";
import icon3 from "../Assets/icon (3).png";
import icon4 from "../Assets/icon (4).png";
import icon5 from "../Assets/icon (5).png";

function OurServices() {
  return (
    <section className="relative bg-[#EFEFEF]">
      <img src={illups} alt="illups" className="absolute end-0 top-0 z-[10]" />
      <img src={illups2} alt="" className="absolute bottom-0 start-0" />
      <div className="container">
        <div className=" pt-[120px] pb-[112px]">
          <h3 className="font-Plus_Jakarta text-[48px] font-bold text-center">
            Our <span className="text-[#9264EE]">Services</span>
          </h3>
          <div className="flex flex-wrap flex-row mx-[-12px] items-center ">
            <div className="w-4/12 px-3 max-xl:w-6/12 max-md:w-full">
              <div className="p-[20px]  hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043] h-100">
                <img src={icon} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Healthcare
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  we are on a mission to revolutionize the field of Healthcare
                  through cutting-edge innovation.
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 mt-4 max-xl:w-6/12 max-md:w-full">
              <div className="p-[20px]  hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043] h-100">
                <img src={icon1} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Education
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  Education is rooted in the idea that learning should be a
                  lifelong journey
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 mt-4 max-xl:w-6/12 max-xl:mt-4 max-md:w-full z-10">
              <div className="p-[20px]   hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043] h-100">
                <img src={icon2} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Finance
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  Recognizing that knowledge is the cornerstone of financial
                  empowerment
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 mt-4 max-xl:w-6/12 max-xl:mt-4 max-md:w-full">
              <div className="p-[20px]  hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043]">
                <img src={icon3} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Marketing
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  where marketing campaigns are driven by data-driven insights,
                  and where creativity knows no bounds.
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 mt-4 max-xl:w-6/12 max-xl:mt-4 max-md:w-full">
              <div className="p-[20px]  hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043]">
                <img src={icon4} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Entertainment
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  We believe that technology has the power to transport
                  individuals to new worlds, unlock creativity
                </p>
              </div>
            </div>
            <div className="w-4/12 px-3 mt-4 max-xl:w-6/12 max-xl:mt-4 max-md:w-full">
              <div className="p-[20px]  hover:shadow-lg duration-200 rounded-[16px] border-[1px] border-[#80808043]">
                <img src={icon5} alt="" />
                <h4 className="text-[24px] font-bold font-Plus_Jakarta mt-[20px]">
                  Agriculture
                </h4>
                <p className="text-4 font-Plus_Jakarta">
                  We are passionate about regenerative farming practices and
                  sustainable agriculture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
