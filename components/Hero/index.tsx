"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="overflow-hidden">
      {/* MOBILE VERSION */}
      <div className="block lg:hidden">
        <div
          className="w-screen"
          style={{
            backgroundColor: "#1f1d49",
          }}
        >
          <section className="pt-20 pb-5">
            <div className="mx-auto px-4 md:px-8">
              <div className="container mx-auto lg:gap-8 xl:gap-32.5">
                <div className="flex">
                  <div className="p-8 pt-12 md:w-1/2 hidden xl:block lg:block md:block">
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                        },

                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_left"
                    >
                      <h1 className="font-skia text-white dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
                        BRIDGING
                        <span className="font-skia text-2xl inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:-z-1 ml-2.5 ">
                          the
                        </span>
                        <br />
                        DIVIDE
                        <span className="font-skia text-2xl inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:-z-1 ml-2.5 ">
                          in
                        </span>
                        <br />
                        EDUCATION
                      </h1>
                      <p className="text-white dark:text-white">
                        Digital Education for communities without power or
                        Internet
                      </p>
                    </motion.div>
                  </div>
                  <div className="md:w-full xl:hidden lg:hidden md:hidden mx-auto">
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                        },

                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_left"
                    >
                      <h1 className="text-center font-skia text-white dark:text-white text-3xl xl:text-hero font-bold">
                        Bridging the Divide
                        <br />
                        in EDUCATION
                      </h1>
                      <p className="text-center text-white dark:text-white">
                        Digital Education for communities without power or
                        Internet
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop View   hidden xl:block lg:block md:block */}
      <div className="hidden lg:block">
        <div
          className="relative w-screen h-[80vh]"
          style={{
            backgroundImage: 'url("/images/hero/hero-home-div.svg")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          <section className="flex flex-col justify-top items-center sm:pt-5 md:pt-8 lg:pt-5 xl:pt-10">
            <div className="mx-auto px-4 md:px-8 2xl:px-0">
              <div className="container mx-auto lg:gap-8 xl:gap-32.5">
                <div className="flex  max-h-[335px]">
                  {/* desktop version  */}
                  <div className="p-8 pt-12 md:w-1/2 hidden xl:block lg:block md:block">
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: -20,
                        },

                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_left"
                    >
                      <h1 className="font-skia text-white dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
                        BRIDGING
                        <span className="font-skia text-2xl inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:-z-1 ml-2.5 ">
                          the
                        </span>
                        <br />
                        DIVIDE
                        <span className="font-skia text-2xl inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:-z-1 ml-2.5 ">
                          in
                        </span>
                        <br />
                        EDUCATION
                      </h1>
                      <p className="text-white dark:text-white">
                        Digital Education for communities without power or
                        Internet
                      </p>
                    </motion.div>
                  </div>

                  <div className="p-8 md:w-1/2 hidden xl:block lg:block md:block">
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          x: 20,
                        },

                        visible: {
                          opacity: 1,
                          x: 0,
                        },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="animate_right hidden md:block relative mx-auto aspect-[588/526.5]"
                    >
                      <Image
                        src="./images/hero/hero-solar.svg"
                        alt="solar image"
                        width={700}
                        height={600}
                        // className="dark:hidden"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="hidden xl:block lg:block md:block">
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -40,
                      },

                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_bottom"
                  >
                    <div>
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-5">
                          {/* <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          placeholder="Enter your email address"
                          className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                        /> */}
                          <button
                            aria-label="get connected button"
                            className="font-skia flex bg-lightblue hover:bg-darkblue dark:bg-btndark text-black rounded-xl ease-in-out duration-300 px-4 py-1 mx-auto text-para2"
                          >
                            Connect a School
                          </button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;
