"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import SectionHeader from "@/components/Common/SectionHeader";

const TechnologyPage = () => {
  return (
    <>
      <title>Technology</title>
      <div className="h-full w-full px-2 text-center md:text-left">
        <div className="pt-40 pb-10 w-full">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: "",
                subtitle: `Minerva Product Line`,
                description: `All Minerva products require no internet or power. Simply place the solar panel in the sun and explore millions of websites.
              `,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>
        <div className="mx-auto md:w-1/2 w-full block relative aspect-[500/300]">
          <Image
            src="/images/technology/MinervaToolBox500250.svg"
            alt="logo"
            fill
          />
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          {/* desktop block */}
          <div className="hidden md:block flex items-center gap-8 px-5">
            <div className="md:w-1/2">
              <h2 className="text-black text-3xl xl:text-sectiontitle2 font-bold mb-7">
                Minerva ToolBox
              </h2>
              <p className="mb-5">
                Minerva ToolBox is a the first computer lab in a box, no larger
                than a carry on suitcase.
              </p>
              <p className="w-11/12">
                This kit contains 12 tablets, power supply, battery, and the
                Minerva Network to allow for access to millions of webpages -
                all without power or electricity. Simply place the included
                solar panel outside and your computer lab is up and running 24/7
              </p>
            </div>
            <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
              <Image
                src="/images/technology/minervaToolbox.svg"
                alt="title"
                fill
              />
            </div>
          </div>

          {/* mobile block */}
          <div className="block sm:hidden flex items-center gap-8 px-5">
            <div className="md:w-1/2">
              <h2 className="text-black text-3xl xl:text-sectiontitle2 font-bold mb-7 pt-6">
                Minerva ToolBox
              </h2>
              <div className="relative mx-auto aspect-[562/366] max-w-[550px]">
                <Image
                  src="/images/technology/minervaToolbox.svg"
                  alt="title"
                  fill
                />
              </div>
              <p className="mb-5">
                Minerva ToolBox is a the first computer lab in a box, no larger
                than a carry on suitcase.
              </p>
              <p className="w-11/12">
                This kit contains 12 tablets, power supply, battery, and the
                Minerva Network to allow for access to millions of webpages -
                all without power or electricity. Simply place the included
                solar panel outside and your computer lab is up and running 24/7
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          {/* desktop block */}
          <div className="hidden md:block flex items-center gap-8 lg:gap-19 py-20">
            <div className="md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
              <Image
                src="/images/technology/minervaCubeRuler.svg"
                alt="toolbox"
                fill
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-black text-3xl xl:text-sectiontitle2 font-bold mb-7">
                Minerva Solo
              </h2>
              <p className="mb-5">
                Minerva Solo contains the robust Minerva Network, battery, and
                attached solar panel.
              </p>
              <p className="w-11/12">
                Functioning on the bring-bring-your-own-device system, Minerva
                Solo broadcasts a Wifi network 24/7, entirely powered by solar
                panels. Members of the community can connect their personal
                phones, laptops and tablets to the network to communicate with
                peers, drop in for online classes, download a book or search
                through millions of webpages. All{" "}
                <u>without any internet connection</u>.
              </p>
            </div>
          </div>

          {/* mobile block */}
          <div className="block sm:hidden flex items-center gap-8 lg:gap-19 py-20">
            <div className="">
              <h2 className="text-black text-3xl xl:text-sectiontitle2 font-bold mb-7">
                Minerva Solo
              </h2>
              <div className="relative mx-auto aspect-[562/366] max-w-[550px]">
                <Image
                  src="/images/technology/minervaCubeRuler.svg"
                  alt="toolbox"
                  fill
                />
              </div>
              <p className="mb-5">
                Minerva Solo contains the robust Minerva Network, battery, and
                attached solar panel.
              </p>
              <p>
                Functioning on the bring-bring-your-own-device system, Minerva
                Solo broadcasts a Wifi network 24/7, entirely powered by solar
                panels. Members of the community can connect their personal
                phones, laptops and tablets to the network to communicate with
                peers, drop in for online classes, download a book or search
                through millions of webpages. All{" "}
                <u>without any internet connection</u>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default TechnologyPage;
