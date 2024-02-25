import React, { useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import Image from "next/image";
import Link from "next/link";

const ContactSection = ({ data }: any) => {
  const [loader, setLoader] = useState(false);
  return (
    <div className="w-full  ">
      <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-[55px] max-md:text-3xl">
        {data?.contactHeading}
      </h3>
      <div className="w-full grid grid-cols-2 items-start gap-20 max-md:grid-cols-1">
        <div className="">
          <p className="font-medium text-2xl text-white mb-7">
            {data?.formHeading}
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validate={(values) => {
              const errors: any = {};
              if (!values.message) {
                errors.message = "Required";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.subject) {
                errors.subject = "Required";
              }
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                axios
                  .post(
                    "https://sheet.best/api/sheets/bf5d691e-1857-4841-bd60-c698ba4595cf",
                    {
                      Name: values.name,
                      Email: values.email,
                      Subject: values.subject,
                      Message: values.message,
                    },
                  )
                  .then((response) => {
                    setSubmitting(false);
                    resetForm();
                  });
                setLoader(true);
              } catch (error) {
                console.error("Error occurred:", error);
              } finally {
                setLoader(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-base text-white">Your Name</label>
                  <input
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="name"
                    className="w-full px-4 py-3 font-medium text-lg text-white rounded-xl placeholder:text-gray border border-gray bg-primaryRGB"
                  />
                  <p className="text-sm text-[red]">
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base text-white">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    className="w-full px-4 py-3 font-medium text-lg text-white rounded-xl placeholder:text-gray border border-gray bg-primaryRGB"
                  />
                  <p className="text-sm text-[red]">
                    {" "}
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base text-white">Your Subject</label>
                  <input
                    type="subject"
                    name="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    placeholder="subject"
                    className="w-full px-4 py-3 font-medium text-lg text-white rounded-xl placeholder:text-gray border border-gray bg-primaryRGB"
                  />{" "}
                  <p className="text-sm text-[red]">
                    {errors.subject && touched.subject && errors.subject}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base text-white">Your Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="message"
                    rows={5}
                    className="w-full px-4 py-3 font-medium text-lg text-white rounded-xl placeholder:text-gray border border-gray bg-primaryRGB"
                  />
                  <p className="text-sm text-[red]">
                    {errors.message && touched.message && errors.message}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[130px] mt-10 px-4 py-2 bg-white flex items-center justify-center rounded-xl font-medium text-lg text-primary max-sm:w-full "
                >
                  {loader ? (
                    <>
                      <div role="status" className="mr-2">
                        <svg
                          aria-hidden="true"
                          className="inline w-6 h-6 text-primary animate-spin  fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                      Loading...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="w-full">
          <p className="font-medium text-2xl text-white mb-7">
            {data?.infoHeading}
          </p>

          <div className="flex flex-col gap-6">
            <p className="text-white font-normal text-base">
              {data?.infoDescription}
            </p>
            <div className="flex items-center gap-6">
              <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                <div className="relative w-5 h-5">
                  <Image src={"/images/facebook.svg"} fill alt={"facebook"} />
                </div>
              </div>
              <div className="">
                <h6 className="font-medium text-xl text-white mb-1">Email</h6>
                <p className="font-normal text-base text-white">
                  {data?.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                <div className="relative w-5 h-5">
                  <Image src={"/images/phone.svg"} fill alt={"facebook"} />
                </div>
              </div>

              <div className="">
                <h6 className="font-medium text-xl text-white mb-1">Phone</h6>
                <p className="font-normal text-base text-white">
                  {data?.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                <div className="relative w-5 h-5">
                  <Image src={"/images/address.svg"} fill alt={"facebook"} />
                </div>
              </div>

              <div className="">
                <h6 className="font-medium text-xl text-white mb-1">Address</h6>
                <p className="font-normal text-base text-white">
                  {data?.address}
                </p>
              </div>
            </div>

            <div className="">
              <p className="font-normal text-xl text-white mb-4">
                {data?.socialMediaHeading}
              </p>
              <div className="flex items-center gap-10">
                {data?.socialMedia?.map((item: any, index: number) => (
                  <Link
                    href={item?.mediaLink || "#"}
                    target="_blank"
                    key={index}
                  >
                    <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                      <div className="relative w-5 h-5">
                        <Image
                          src={
                            item?.socialMediaIcons?.url ||
                            "/images/facebook.svg"
                          }
                          fill
                          alt={"facebook"}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
