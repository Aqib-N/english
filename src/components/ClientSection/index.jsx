import React from "react";
import { SVGIcon } from "../SVGIcon";
import Rating from "react-rating";

const ClientSection = ({ data }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-[50px]">
        <h3 className="font-bold text-4xl text-center text-white w-max border-b-[3px] border-white mb-[20px] max-md:text-3xl">
          {data?.clientHeading}
        </h3>
        <p className="font-normal text-medium text-white text-center mb-[20px]">
          {data?.clientDescription}
        </p>
      </div>
      <div className=" w-full grid grid-cols-3 gap-6 mb-[50px] max-sm:grid-cols-1 max-md:grid-cols-2">
        {data?.clientCard?.map((item, index) => (
          <div
            key={index}
            className="w-full h-[300px]  rounded border-2 hover:border-secondaryBdr border-secondary bg-secondary overflow-hidden p-[25px] max-sm:grid-cols-1 max-lg:p-[10px] max-md:p-[15px] max-sm:h-[300px] "
          >
            <div className="flex justify-between  mt-2 ">
              <div className="flex items-center ">
                <img
                  src={item?.clientImage?.url || "/images/profile.jpg"}
                  alt="img"
                  className="w-[60px] h-[60px] rounded-full bg-cover bg-center max-md:w-[50px] max-md:h-[50px]  max-lg:w-[40px] max-lg:h-[40px]  "
                />

                <div className="ml-[10px] max-md:ml-[8px] max-lg:ml-[8px] ">
                  <h6 className="font-medium text-lg text-white mt-1 max-lg:font-normal max-lg:text-sm max-md:font-normal max-md:text-base">
                    {item?.cardHeading}
                  </h6>
                  <p className="font-normal  text-sm text-white max-md:font-light  max-lg:font-light">
                    UI/UX Designer
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-items-end gap-1 ml-[30px] max-md:ml-[15px]  max-lg:ml-[5px]">
                <Rating
                  stop={5}
                  initialRating={item?.clientRating}
                  placeholderRating={item?.clientRating}
                  className=""
                  emptySymbol={<SVGIcon color="#ffffff" />}
                  fullSymbol={<SVGIcon color="#26A2C9" />}
                />
              </div>
            </div>
            <p className="font-normal text-sm text-white mt-8 mb-5  max-lg:mt-6">
              {item?.cardDescription}
            </p>
            <p className="font-normal  text-sm text-white w-max border-b-[1px]">
              {item?.cardDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
