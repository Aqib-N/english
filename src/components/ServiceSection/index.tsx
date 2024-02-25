import Image from "next/image";
import React from "react";

const ServiceSection = ({ data }: any) => {
  return (
    <div className="w-full mb-28">
      <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-10 max-md:text-3xl">
        {data?.serviceHeading}
      </h3>
      <div className="w-full grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-md:grid-cols-2  ">
        {data?.serviceCards?.map((item: any, index: number) => (
          <div
            key={index}
            className=" w-full rounded-2xl  bg-gray1 overflow-hidden "
          >
            <div className="w-full h-[200px] bg-yellow relative">
              <Image src={item?.cardImage?.url} alt="" fill />
            </div>
            <div className="w-full flex flex-col  justify-between gap-2 text-left p-6 ">
              <h4 className="font-semibold text-2xl text-primary ">
                {item?.cardHeading}
              </h4>
              <p className="font-medium text-base  text-primary ">
                {item?.cardAbout}
              </p>
              <button className="w-[130px] mt-2 px-4 py-2 bg-primary flex items-center justify-center rounded-xl font-medium text-lg text-white ">
                {item?.cardButton}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
