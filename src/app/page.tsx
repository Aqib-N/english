/* eslint-disable @next/next/no-img-element */
"use client";
import { Formik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { homePage } from "@/services";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import ClientSection from "@/components/ClientSection";
import ContactSection from "@/components/ContantSection";

export default function Home() {
  const [data, setData] = useState<any>([]);

  const [heroSection, setHeroSection] = useState<any>({});
  const [serviceSection, setServiceSection] = useState({});
  const [aboutSection, setAboutSection] = useState({});
  const [clientSection, setClientSection] = useState({});
  const [contactSection, setContactSection] = useState({});

  useEffect(() => {
    homePageData();
  }, []);

  const homePageData = async () => {
    const res = await homePage();
    setData(res);
    return;
  };

  useEffect(() => {
    const heroSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "hero section",
    );
    const serviceSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "service section",
    );
    const aboutSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "about section",
    );
    const clientSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "client section",
    );
    const contactSectionData = data?.homePages?.[0]?.sections?.filter(
      (i: any) => i.sectionName === "contact section",
    );
    setContactSection(contactSectionData?.[0]);
    setClientSection(clientSectionData?.[0]);
    setAboutSection(aboutSectionData?.[0]);
    setServiceSection(serviceSectionData?.[0]);
    setHeroSection(heroSectionData?.[0]);
  }, [data?.homePages]);

  console.log(contactSection);

  return (
    <>
      <div className="w-full h-screen relative   ">
        {heroSection?.bannerImages?.map((item: any, index: number) => (
          <div
            key={index}
            className=" w-full h-screen top-0 left-0 absolute bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                item?.heroImage?.[0]?.url || "/images/banner-bg.png"
              })`,
            }}
          />
        ))}
        <div className="max-w-7xl relative  h-full mx-auto px-5 flex flex-col gap-7 items-center justify-center min-sm:items-center ">
          <h1 className="font-extrabold text-5xl text-white text-center  max-sm:text-3xl ">
            Hi, I am&nbsp;
            <span className="text-yellow">{heroSection?.heading}</span>
          </h1>
          <p className="font-normal text-lg text-white w-full text-center max-sm:font-thin">
            {heroSection?.description}
          </p>
          <div className="flex items-center gap-10">
            <div className="w-[50px] h-[50px]  flex items-center justify-center border border-gray rounded-full ">
              <div className="relative w-5 h-5">
                <Image src={"/images/facebook.svg"} fill alt={"facebook"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-[120px] py-[90px] md:px-[32px] max-sm:px-[20px] ">
        {/* service section */}
        <ServiceSection data={serviceSection} />

        {/* about section */}

        <AboutSection data={aboutSection} />

        {/* client section */}
        <ClientSection data={clientSection} />

        {/* content */}
        <ContactSection data={contactSection} />
      </div>
    </>
  );
}
