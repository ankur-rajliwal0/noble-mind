import React from "react";
import pic from "../Assets/Group 1171275196.png";
import pic2 from "../Assets/Group 1171275194.png";
import illups from "../Assets/Ellipse 3914.png";
import illup2 from "../Assets/Ellipse 3913.png";
import frame from "../Assets/Frame 1171275192.png";

function OurMission() {
  return (
    <section className="relative">
      <img
        src={illups}
        alt=""
        className="absolute z-[-10] end-0 top-[-200px]"
      />
      <img src={illup2} alt="" className="absolute z-[-10] start-0" />
      <div className="container">
        <div className="flex flex-wrap mx-[-12px] flex-row  items-center">
          <div className="lg:w-6/12 w-full px-3">
            <img src={pic} alt="" className="w-full" />
          </div>
          <div className="lg:w-6/12 w-full  px-3">
            <div className="max-w-[536px] mt-[106px]   ">
              <h3 className="font-extrabold max-w-[373px] font-Plus_Jakarta text-[48px] ">
                Our <span className="text-[#9561ED] "> Mission</span>
              </h3>
              .
              <p className="text-4 font-Plus_Jakarta text-start">
                In our commitment to excellence, we create value across these
                diverse sectors. In Healthcare, we seek to improve patient
                outcomes and make healthcare more accessible. In Education, we
                aim to revolutionize learning experiences, empowering
                individuals with knowledge. In Finance, we strive to enhance
                financial services, making them more inclusive and efficient. In
                Marketing, we harness the power of data and AI to drive
                innovation and growth.
              </p>
              <button className="btn-bg font-Plus_Jakarta py-4 px-[42px] mt-[42px] rounded-[61px] ">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="xl:mt-[152px] mb-[152px] ">
          <div className="flex flex-wrap max-xl:flex-wrap-reverse flex-row mx-[-12px] items-center ">
            <div className="w-6/12 max-xl:w-full px-3">
              <div className="xl:max-w-[462px] ">
                {" "}
                <h3 className="font-Plus_Jakarta text-[48px]  font-bold  ">
                  Our <span className="text-[#9561ED] ">Vision</span>
                </h3>
                <p className="font-Plus_Jakarta text-4 max-w-[461px] leading-[150%] mt-4 text-center">
                  The future of how we live, work, and learn. We see a world
                  where technology is not just a tool but a transformative force
                  for good, reshaping every aspect of human existence.
                </p>
                <div className="flex mt-[24px] border-[#8F66EF] rounded-[16px] border-solid border-[1px] gap-[10px] p-3  ">
                  <img src={frame} alt="" className="w-[32px] h-[32px] " />
                  <p className="font-Plus_Jakarta">
                    The future of how we live, work, and learn. We see a world
                    where technology is not just a tool but a transformative
                    force for good, reshaping every aspect of human existence.
                  </p>
                </div>
                <div className="flex mt-[12px] border-[#8F66EF] rounded-[16px] border-solid border-[1px] gap-[10px] p-3 ">
                  <img src={frame} alt="" className="w-[32px] h-[32px] " />
                  <p className="font-Plus_Jakarta">
                    Technology is seen as a force for good, capable of driving
                    positive change in society and improving the human
                    experience.
                  </p>
                </div>
                <div className="flex mt-[12px] border-[#8F66EF] rounded-[16px] border-solid border-[1px] gap-[10px] p-3 max-xl:w-full ">
                  <img src={frame} alt="" className="w-[32px] h-[32px] " />
                  <p className="font-Plus_Jakarta">
                    Share insights and innovations that have a positive impact
                    across borders and sectors.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-6/12 max-xl:w-full max-xl:mt-8 px-3 ">
              <img src={pic2} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
