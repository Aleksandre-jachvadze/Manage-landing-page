const WhatsDifferent = () => {
  return (
    <section className="w-full px-8 pt-28 md:p-44 md:pb-20 flex flex-col md:flex-row gap-12 md:gap-2 relative overflow-hidden">
      <div className="flex flex-col items-center md:items-start basis-full gap-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-dark-blue tracking-tight ">
          What&apos;s different about Manage?
        </h1>
        <p className="text-grayish-blue w-full md:w-3/4  ">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col gap-8 basis-full items-center">
        <div className="basis-full grid grid-cols-[65px_235px] md:grid-cols-[65px_350px] grid-rows-[30px,150px] gap-x-0  md:gap-x-3 gap-y-2 ">
          <span className="py-1 px-6 bg-bright-red text-light-grey rounded-full col-start-1 col-end-2 row-start-1 row-end-2 self-center z-[5]">
            01
          </span>
          <h3 className="font-bold text-dark-blue tracking-tighter col-start-2 col-end-3 row-start-1 row-end-2 self-center bg-pale-red md:bg-transparent py-1 md:py-0 pl-1 -ml-[0.1rem]">
            Track company-wide progress
          </h3>
          <p className="text-grayish-blue leading-relaxed col-start-1 md:col-start-2 col-end-3 md:col-end-3 row-start-2 row-end-3 text-sm md:text-base text-pretty">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="basis-full grid grid-cols-[65px_235px] md:grid-cols-[65px_350px] grid-rows-[30px,150px] gap-x-0  md:gap-x-3 gap-y-2 ">
          <span className="py-1 px-6 bg-bright-red text-light-grey rounded-full col-start-1 col-end-2 row-start-1 row-end-2 self-center z-[5] ">
            02
          </span>
          <h3 className="font-bold text-dark-blue tracking-tighter col-start-2 col-end-3 row-start-1 row-end-2 self-center bg-pale-red md:bg-transparent py-1 md:py-0 pl-1 -ml-[0.1rem]">
            Advanced built-in reports
          </h3>
          <p className="text-grayish-blue leading-relaxed col-start-1 md:col-start-2 col-end-3 md:col-end-3 row-start-2 row-end-3 text-sm md:text-base text-pretty">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="basis-full grid grid-cols-[65px_250px] md:grid-cols-[65px_350px] grid-rows-[30px,150px] gap-x-0  md:gap-x-3 gap-y-2 ">
          <span className="py-1 px-6 bg-bright-red text-light-grey rounded-full col-start-1 col-end-2 row-start-1 row-end-2 self-center z-[5] ">
            03
          </span>
          <h3 className="font-bold text-dark-blue tracking-tighter col-start-2 col-end-3 row-start-1 row-end-2 self-center bg-pale-red md:bg-transparent py-1 md:py-0 pl-1 -ml-[0.1rem]">
            Everything you need in one place
          </h3>
          <p className="text-grayish-blue leading-relaxed col-start-1 md:col-start-2 col-end-3 md:col-end-3 row-start-2 row-end-3 text-sm md:text-base text-pretty">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsDifferent;
