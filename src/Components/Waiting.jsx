import React from "react";
import uparlayer from "../Assets/Layer 3.png";
import dowmlayer from "../Assets/Layer 4.png";

function Waiting() {
  return (
    <section className="">
      <div className="container">
        <div className="mt-[152px] mb-[148px] container-bg relative rounded-[16px] flex  flex-col  items-center py-[80px] max-md:mt-[20px] max-md:mb-[30px]">
          <img src={uparlayer} alt="" className=" absolute top-0" />
          <img src={dowmlayer} alt="" className=" absolute bottom-0  " />
          <h3 className="text-[48px] font-Plus_Jakarta font-bold text-center text-white max-md:text-[25px]">
            So, what you’ve been waiting for?{" "}
          </h3>
          <p className="text-4 text-center font-Plus_Jakarta max-w-[788px] mx-auto text-white leading-[150%] max-md:text-[10px]">
            Ipsum integer faucibus eu morbi integer. Tempus in volutpat libero
            mauris neque dolor pellentesque sagittis. Scelerisque tempor auctor
            euismod rhoncus non elit molestie sed. Orci quam at varius eget.
          </p>
          <button className="text-4 py-4 px-[42px] bg-white rounded-[36px] mt-[42px] flex items-center justify-center max-md:text-[10px] max-md:px-[20px] max-md:py-[10px] hover:bg-transparent hover:border-white hover:text-white border border-transparent duration-300 hover:border  z-10">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Waiting;
