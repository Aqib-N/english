import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full absolute top-0 left-0 z-[1]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 px-[120px] ">
        <Image
          src={"./images/phone.svg"}
          alt={"email"}
          width={24}
          height={24}
        />
        <div className="w-max flex items-center gap-10">
          <Link className=" font-normal text-lg" href={""}>
            About Us
          </Link>
          <Link className=" font-normal text-lg" href={""}>
            Services
          </Link>
          <div className="flex items-center gap-5 ">
            <div className="w-[1px] h-[18px] bg-yellow" />
            <Link className=" font-normal text-lg" href={""}>
              <Image
                src={"./images/email.svg"}
                alt={"email"}
                width={20}
                height={15}
              />
            </Link>
            <div className="w-[1px] h-[18px] bg-yellow" />
            <Link className=" font-normal text-lg" href={""}>
              <div className="flex items-center  gap-2">
                <Image
                  src={"./images/phone.svg"}
                  alt={"email"}
                  width={24}
                  height={24}
                />
                <p className="text-yellow"> +1 971 234 1508</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
