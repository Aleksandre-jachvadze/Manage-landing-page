import Illustration from "../../assets/illustration-intro.svg";
import Pattern from "../../assets/bg-tablet-pattern.svg";
import CustomButton from "../CustomButton";
const Hero = () => {
  return (
    <section className="w-full pt-36 md:pt-44 px-8 md:px-44 flex flex-col-reverse md:flex-row gap-8  md:gap-2 relative overflow-hidden items-center">
      <img
        src={Pattern}
        className="absolute -z-20 -top-12 -right-12 md:-top-60 md:-right-52 "
      />
      <div className="flex flex-col items-center md:items-start basis-full gap-6 text-center md:text-left text-balance">
        <h1 className=" text-4xl md:text-5xl font-bold text-dark-blue tracking-tight leading-[1.05]">
          Bring everyone together to build better products.
        </h1>
        <p className="text-grayish-blue md:w-3/4 text-balance">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <CustomButton>Get Started</CustomButton>
      </div>
      <div className="flex flex-col basis-full justify-center items-center  ">
        <div className="flex justify-center items-start w-11/12 h-11/12 ">
          <img src={Illustration} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
