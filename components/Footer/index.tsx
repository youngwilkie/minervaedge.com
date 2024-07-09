"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="border-t border-strok lg:flex-row items-center gap-5 lg:gap-0 py-7">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="flex items-center justify-between w-full">
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-light.svg"
                  alt="Logo"
                  className="dark:hidden"
                />
                <div className="mr-8">
                  <u>
                    <a href="mailto:contact@minervaedge.com">Email the Team</a>
                  </u>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
