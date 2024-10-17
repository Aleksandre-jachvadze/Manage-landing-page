import Carousel from "../Carousel";
import CustomButton from "../CustomButton";
const WhatTheySaid = () => {
  return (
    <section className="w-full py-28 flex flex-col gap-12 items-center overflow-hidden">
      <h1 className="text-4xl font-bold text-dark-blue tracking-tight">
        What they&apos;ve said
      </h1>
      <Carousel />
      <div className="mt-12">
        <CustomButton>Get Started</CustomButton>
      </div>
    </section>
  );
};

export default WhatTheySaid;
