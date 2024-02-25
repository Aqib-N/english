import React from "react";

const AboutSection = ({ data }: any) => {
  return (
    <div className="w-full grid grid-cols-2 items-start gap-20 mb-28 max-lg:grid-cols-1">
      <div className="">
        <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-[76px] max-md:text-3xl ">
          {data?.aboutHeading}
        </h3>
        <p className="font-normal text-lg text-white">
          {data?.aboutDescription}
        </p>
        <button className="w-[130px] mt-10 px-4 py-2 bg-white flex items-center justify-center rounded-xl font-medium text-lg text-primary ">
          {data?.aboutButton}
        </button>
      </div>
      <img
        src={data?.aboutImage?.url || "/images/about.png"}
        alt="img"
        className="w-max h-auto object-contain"
      />
    </div>
  );
};

export default AboutSection;
