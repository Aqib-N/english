"use client";

import { Formik } from "formik";
import Image from "next/image";

interface Error {
  email: string;
}

export default function Home() {
  return (
    <>
      <div
        className="w-full h-screen relative bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(./images/banner-bg.png)`,
        }}
      >
        <div className="max-w-7xl h-full mx-auto px-5 flex flex-col gap-7 items-center justify-center">
          <h1 className="font-extrabold text-5xl text-white">
            Hi, I am
            <span className="text-yellow"> Jhon Doe</span>
          </h1>
          <p className="font-normal text-lg text-white w-full md:w-[691px] mx-auto text-center ">
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <div className="flex items-center gap-10">
            <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
              <div className="relative w-5 h-5">
                <Image src={"./images/facebook.svg"} fill alt={"facebook"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-[120px] py-[90px] ">
        <div className="w-full mb-28">
          <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-10">
            Services
          </h3>
          <div className="w-full grid grid-cols-3 gap-6">
            <div className=" w-full rounded-2xl  bg-gray1 overflow-hidden ">
              <div className="w-full h-[200px] bg-yellow relative  "></div>
              <div className="w-full flex flex-col  justify-between gap-2 text-left p-6 ">
                <h4 className="font-semibold text-2xl text-primary ">
                  Commnuications
                </h4>
                <p className="font-medium text-base  text-primary ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  quisquam possimus assumenda officiis laboriosam necessitatibus
                  quaerat ea mollitia ducimus. Sed temporibus non neque.
                  Excepturi odio aperiam perspiciatis, tenetur deleniti atque.
                </p>
                <button className="w-[130px] mt-2 px-4 py-2 bg-primary flex items-center justify-center rounded-xl font-medium text-lg text-white ">
                  More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 items-start gap-20 mb-28">
          <div className="">
            <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-[76px]">
              About Us
            </h3>
            <p className="font-normal text-lg text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              deleniti quo porro illo tempora non rerum, optio atque ea
              distinctio soluta iste necessitatibus ipsum quam, iure cupiditate
              perspiciatis facilis explicabo?
            </p>
            <button className="w-[130px] mt-10 px-4 py-2 bg-white flex items-center justify-center rounded-xl font-medium text-lg text-primary ">
              More
            </button>
          </div>
          <img src="./images/about.png" alt="img" className="w-max h-auto" />
        </div>

        <div className="w-full">
          <h3 className="font-bold text-4xl text-white w-max border-b-[3px] border-white mb-[55px]">
            contact Me
          </h3>
          <div className="w-full grid grid-cols-2 items-start gap-20">
            <div className="">
              <p className="font-medium text-2xl text-white mb-7">
                Just Say Hello
              </p>
              <Formik
                initialValues={{
                  email: "",
                  name: "",
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
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email,
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
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
                      <label className="text-base text-white">
                        Your Subject
                      </label>
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
                      <label className="text-base text-white">
                        Your Message
                      </label>
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
                      className="w-[130px] mt-10 px-4 py-2 bg-white flex items-center justify-center rounded-xl font-medium text-lg text-primary "
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
            <div className="w-full">
              <p className="font-medium text-2xl text-white mb-7">
                Contact Info
              </p>

              <div className="flex flex-col gap-6">
                <p className="text-white font-normal text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt, repellat incidunt consequatur sed unde natus earum
                  molestias ut quos pariatur odio modi porro consectetur ea
                  deserunt hic illum officiis. Quasi?
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                    <div className="relative w-5 h-5">
                      <Image
                        src={"./images/facebook.svg"}
                        fill
                        alt={"facebook"}
                      />
                    </div>
                  </div>
                  <div className="">
                    <h6 className="font-medium text-xl text-white mb-1">
                      Email
                    </h6>
                    <p className="font-normal text-base text-white">
                      devis@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                    <div className="relative w-5 h-5">
                      <Image src={"./images/phone.svg"} fill alt={"facebook"} />
                    </div>
                  </div>
                  <div className="">
                    <h6 className="font-medium text-xl text-white mb-1">
                      Phone
                    </h6>
                    <p className="font-normal text-base text-white">
                      +1 876-369-9009 <br />
                      +1 213-519-1786
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                    <div className="relative w-5 h-5">
                      <Image
                        src={"./images/address.svg"}
                        fill
                        alt={"facebook"}
                      />
                    </div>
                  </div>
                  <div className="">
                    <h6 className="font-medium text-xl text-white mb-1">
                      Address
                    </h6>
                    <p className="font-normal text-base text-white">
                      2661 High Meadow Lane Bear Creek, Olancha, KY 93544
                    </p>
                  </div>
                </div>

                <div className="">
                  <p className="font-normal text-xl text-white mb-4">
                    Visite my social profile and get connected
                  </p>
                  <div className="flex items-center gap-10">
                    <div className="w-[50px] h-[50px] flex items-center justify-center border border-gray rounded-full ">
                      <div className="relative w-5 h-5">
                        <Image
                          src={"./images/facebook.svg"}
                          fill
                          alt={"facebook"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
