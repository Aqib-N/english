'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  const [open, setOpen ] = useState<any>(false)
    return (
    <div className="w-full absolute top-0 left-0 z-[1]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between py-5 px-[120px] max-md:px-[20px] ">
        <Image
          src={"./images/phone.svg"}
          alt={"email"}
          width={24}
          height={24}
        />

          <button onClick={()=>setOpen(!open)} className="text-3xl w-[30px] h-[30px]absolute  cursor-pointer md:hidden">
            <img src= {open ? './images/close.svg' : './images/menu.svg'}  alt=" menu"  />
          </button>
        <div className={`w-max flex items-center gap-10  max-md:w-full  max-md:pl-[20px] max-md:pt-[100px] max-md:pb-[50px] absolute md:static md:z-auto z-[-1] 
           max-md:bg-secondary left-0 max-md:flex-col  transition-all duration-500 ease-in ${open ?'top-0': "top-[-490px]"}  `}>
          <Link className=" font-normal text-lg"  href={""}>
            About Us
          </Link>
          <Link className=" font-normal text-lg" href={""}>
            Services
          </Link>
          

          <div className="flex items-center align-center gap-5 max-md:flex-col  ">
            <div className="w-[1px] h-[18px] bg-yellow max-md:hidden" />
            <Link className=" font-normal text-lg" href={""}>
              <Image
                src={"./images/email.svg"}
                alt={"email"}
                width={20}
                height={15}
              />
            </Link>
            <div className="w-[1px] h-[18px] bg-yellow max-md:hidden" />
            <Link className=" font-normal text-lg" href={""}>
              <div className="flex items-center  gap-2">
                <Image
                  src={"./images/phone.svg"}
                  alt={"email"}
                  width={24}
                  height={24}
                />
                <p className="text-yellow "> +1 971 234 1508</p>
              </div>
            </Link>
          </div>

          
        </div>
         </div>
         </div>
  );
};
