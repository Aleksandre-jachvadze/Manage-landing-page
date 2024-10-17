import Logo from "../../assets/logo.svg";
import CustomButton from "../CustomButton";
import Hamburger from "../../assets/icon-hamburger.svg";
import Close from "../../assets/icon-close.svg";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="w-full flex justify-around md:justify-evenly items-center px-2 py-1 absolute z-50 ">
        <div className="w-24 h-24 flex items-center">
          <img src={Logo} className="max-w-[125%] md:max-w-[100%]" />
        </div>
        <div className="hidden md:flex gap-4 text-base cursor-pointer items-center">
          <span>Pricing</span>
          <span>Product</span>
          <span>About us</span>
          <span>Careers</span>
          <span>Community</span>
        </div>
        <div className="hidden md:block">
          <CustomButton>Get Started</CustomButton>
        </div>
        <div
          className="block mb-2 cursor-pointer md:hidden"
          onClick={() => setActive(!active)}
        >
          <img src={active ? Close : Hamburger} />
        </div>
      </div>
      <div
        className={`${
          active ? "block" : "hidden"
        } fixed top-0 left-0 h-full w-full z-10 md:hidden`}
      >
        <div className="w-[90%] bg-white mx-auto flex flex-col items-center mt-20 py-8 gap-6 font-semibold shadow-mobile ">
          <span>Pricing</span>
          <span>Product</span>
          <span>About us</span>
          <span>Careers</span>
          <span>Community</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
