import React from "react";
import banner from "../Assets/Frame 89.png";
import frame from "../Assets/Frame 1171275192 (1).png";
import illups from "../Assets/Ellipse 3915 (2).png";
import illups2 from "../Assets/Ellipse 3916.png";
function WhyChoseUS() {
  return (
    <section className="relative">
      <img src={illups} alt="" className="absolute end-0 top-[-120px] z-[-1]" />
      <img
        src={illups2}
        alt=""
        className="absolute bottom-[-100px] left-0 z-[-10]"
      />
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px] items-center pt-[152px]">
          <div className="lg:w-6/12 px-3">
            <h3 className="text-[48px] font-Plus_Jakarta font-bold text-center ">
              Why <span className="text-[#9363ED]">Choose</span> Us
            </h3>
          </div>
          <div className="lg:w-6/12 px-3">
            <p className="text-3 font-Plus_Jakarta text-left max-w-[666px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id nisi euismod, porttitor quam sit amet, efficitur
              lectus. Mauris eget pulvinar ante. Fusce posuere, mi in pretium
              consequat, sem augue eleifend lorem, ut blandit libero neque vitae
              ex. Aenean interdum a arcu aliquam imperdiet.
            </p>
          </div>
        </div>
        <img src={banner} alt="" className="w-full mt-[52px]" />
        <div className="flex flex-wrap mx-[-12px] flex-row mt-[52px] pb-[152px] ">
          <div className="lg:w-6/12 w-full">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px]  hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Customer-Centric</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Prioritize and anticipate client needs, ensuring our technology
                solutions consistently deliver unparalleled value.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 w-full mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px]  hover:shadow-lg ">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Global Resonance</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Share insights and innovations that have a positive impact
                across borders and sectors.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Ethical Leadership</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4 ">
                Maintain the highest standards in all practices, ensuring our
                solutions are responsible, safe, and transparent.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Innovation</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Stay at the vanguard of technological transformation, redefining
                futures and driving excellence in all our offerings.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px] w-full">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Commitment to Vision 2030</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Align with and champion Saudi Arabia's technological and
                societal aspirations.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Collaboration</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Forge strategic partnerships across industries and institutions,
                emphasizing both global and local advancements.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Social Responsibility</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Dedicate ourselves to uplifting communities, driving positive
                change, and promoting sustainable practices in both business and
                societal arenas.
              </p>
            </div>
          </div>
          <div className="lg:w-6/12 mt-[24px]">
            <div className="border rounded-[16px] p-4 lg:max-w-[558px] hover:shadow-lg">
              <div className="flex font-Plus_Jakarta font-bold text-4 gap-2">
                <img src={frame} alt="" />
                <h6>Workplace Harmony</h6>
              </div>
              <p className="text-4 font-Plus_Jakarta  mt-4">
                Create a nurturing and peaceful environment for our staff,
                fostering growth, well-being, and unity. We are more than a
                team; we are a family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoseUS;
