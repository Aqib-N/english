/* eslint-disable @next/next/no-img-element */
"use client";
import { homePage } from "@/services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState<any>(false);
  const [data, setData] = useState<any>([]);
  const [navbarData, setNavbarData] = useState<any>({});

  useEffect(() => {
    homePageData();
  }, []);

  const homePageData = async () => {
    const res = await homePage();
    setData(res);
    return;
  };

  useEffect(() => {
    const navBarSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "navbar"
    );
    setNavbarData(navBarSectionData?.[0]);
  }, [data?.homePages]);

  return (
    <div className="w-full  top-0 left-0 z-[99] fixed  backdrop-blur  ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 px-[120px] max-md:px-[20px] ">
        <div className="flex items-center gap-3">
          <Image
            src={navbarData?.webLogo?.url}
            alt={"web logo"}
            width={48}
            height={48}
          />

          <h3 className=" font-bold text-gray1 text-base">
            Multi Speaking Studio
          </h3>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl w-[30px] h-[30px]absolute  cursor-pointer md:hidden"
        >
          <img
            src={open ? "/images/close.svg" : "/images/menu.svg"}
            alt=" menu"
          />
        </button>
        <div
          className={`w-max flex items-center gap-10  max-md:w-full max-md:h-[100vh]  max-md:pl-[20px] max-md:pt-[120px] max-md:pb-[50px] absolute md:static md:z-auto z-[-1] 
           max-md:bg-secondary left-0 max-md:flex-col  transition-all duration-500 ease-in ${
             open ? "top-0" : "top-[-690px]"
           }  `}
        >
          {navbarData?.navLinks?.map((item: any, index: number) => (
            <Link
              key={index}
              className="font-normal text-lg"
              href={item?.pageLink || ""}
            >
              {item?.pageName}
            </Link>
          ))}

          <div className="flex items-center align-center gap-5 max-md:flex-col  ">
            <div className="w-[1px] h-[18px] bg-yellow max-md:hidden" />
            <Link className="font-normal text-lg" href={""}>
              <Image
                src={"/images/email.svg"}
                alt={"email"}
                width={20}
                height={15}
              />
            </Link>
            <div className="w-[1px] h-[18px] bg-yellow max-md:hidden" />
            <Link className=" font-normal text-lg" href={""}>
              <div className="flex items-center  gap-2">
                <Image
                  src={"/images/phone.svg"}
                  alt={"email"}
                  width={24}
                  height={24}
                />
                <p className="text-yellow ">{navbarData?.phoneNumber}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
