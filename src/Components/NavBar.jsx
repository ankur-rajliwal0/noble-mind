import React, { useState } from "react";
import Logo from "../Assets/Logo";

function NavBar() {
  const [show, setshow] = useState(true);
  return (
    <>
      <div className="container ">
        <div
          className="flex justify-between items-center py-4 bg-transparent
        "
        >
          <a href="" className=" ">
            <Logo />
          </a>
          <div
            className={`${
              show ? "left-00" : "left0"
            } menulist max-xl:absolute z-20 max-xl:bg-[#7d37ff]  max-xl:w-full max-xl:top-0 max-xl:h-screen max-xl:justify-center items-center gap-[205px] flex max-xl:items-center max-xl:flex-col max-xl:gap-8 duration-300 ease-linear  `}
          >
            <ul className="ul flex gap-[32px] max-w-[375px] max-xl:flex max-xl:flex-col max-xl:items-center">
              <li className="text-4 font-Plus_Jakarta cursor-pointer relative after:absolute after:w-0 after:hover:w-full after:duration-300 after:ease-linear after:h-[2px] after:bg-black after:bottom-0  after:left-0 ">
                Home
              </li>
              <li className="text-4 font-Plus_Jakarta cursor-pointer relative after:absolute after:w-0 after:hover:w-full after:duration-300 after:h-[2px] after:bg-black after:bottom-0 after:left-0">
                About Us
              </li>
              <li className="text-4 font-Plus_Jakarta cursor-pointer relative after:absolute after:w-0 after:hover:w-full after:duration-300 after:h-[2px] after:bg-black after:bottom-0 after:left-0">
                Solutions
              </li>
              <li className="text-4 font-Plus_Jakarta cursor-pointer relative after:absolute after:w-0 after:hover:w-full after:duration-300 after:h-[2px] after:bg-black after:bottom-0 after:left-0">
                Resources
              </li>
            </ul>
            <button className="py-4 px-[42px]  rounded-[45px] text-white btn-bg hover:border-black hover:bg-transparent border cursor-pointer  z-[10] ">
              Contact Us
            </button>
          </div>
          <div
            className="max-xl:block hidden z-20 "
            onClick={() => setshow(!show)}
          >
            <sapn className="h-[3px] block w-8 bg-black"></sapn>
            <sapn className="h-[3px] block w-8 bg-black my-2 "></sapn>
            <sapn className="h-[3px] block w-8 bg-black"></sapn>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
