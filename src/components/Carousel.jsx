import { useState } from "react";
import { slides } from "./slides";
const Carousel = () => {
  const [current, setCurrent] = useState(1);
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      <div className="w-[90%] md:w-[35%] flex gap-2.5 mt-12 relative">
        {slides.map(({ id, image, quote, name }) => {
          return (
            <div
              className="transition duration-200 ease-linear"
              key={id}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              <div className="flex flex-col min-w-[300px] md:min-w-[450px]  p-12 pb-6 bg-light-grey gap-4 relative justify-center items-center">
                <div className="w-16 h-16 rounded-full absolute -top-8">
                  <img src={image} />
                </div>
                <h3 className="font-bold text-dark-blue tracking-tighter mt-4">
                  {name}
                </h3>
                <p className="text-grayish-blue text-center text-sm w-[120%] leading-relaxed">
                  {quote}
                </p>
              </div>
            </div>
          );
        })}
        <div
          className="absolute text-5xl text-bright-red left-[3%] md:-left-36 top-[15.75rem] md:top-52 cursor-pointer"
          onClick={previousSlide}
        >
          &#8592;
        </div>
        <div
          className="absolute text-5xl text-bright-red right-[3%] md:-right-36 top-[15.75rem] md:top-52 cursor-pointer"
          onClick={nextSlide}
        >
          &#8594;
        </div>
        <div className="flex gap-4 absolute -bottom-12 md:-bottom-12 left-[32.5%] md:left-44 items-center justify-center ">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full  cursor-pointer border border-bright-red ${
                i == current ? "bg-bright-red" : "transparent"
              }`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
