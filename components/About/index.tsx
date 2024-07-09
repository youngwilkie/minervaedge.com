"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/about/about-light-01.svg"
                alt="About"
                className="dark:hidden"
                fill
              />

            </motion.div>
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  Demo
                </span>
                Tanzania
              </h4>
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Minerva in Use
                {/* <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1">
                  SaaS Startup
                </span> */}
              </h2>
              <p>
                Minerva has built a fully contained computer lab in a box
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Portable and Affordable
                  </h5>
                  <p>Power System, tablets, and network system all fit in a carry on sized container</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Turn Key Computer Lab
                  </h5>
                  <p>Box contains all components needed for a computer lab - no power or internet required</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
