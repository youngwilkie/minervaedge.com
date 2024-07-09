"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

const How = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="how" className="py-2 lg:py-6 xl:py-6 my-6">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <p className="mx-auto text-center text-lg">
            <b>MINERVA</b> is designed to create a <b>WiFi network</b> with
            downloaded websites for use in environments
            <br />
            and communities that{" "}
            <span className="text-lightblue">
              lack are have restricted infrastructure and internet connectivity
            </span>
          </p>
          {/* <!-- Section Title End --> */}
          <div className="mx-auto w-1/2 block relative aspect-[345.5/170]">
            <Image src="/images/hero/kids.svg" alt="logo" fill />
          </div>
          <div className="mx-auto w-full grid grid-cols-3 gap-4">
            <div className="mx-auto w-3/4 block relative aspect-[150/150]">
              <Image src="/images/hero/how-step1.svg" alt="logo" fill />
            </div>
            <div className="mx-auto w-3/4 block relative aspect-[150/150]">
              aa
              <Image src="/images/hero/how-step2.svg" alt="logo" fill />
            </div>
            <div className="mx-auto w-3/4 block relative aspect-[150/150]">
              <Image src="/images/hero/how-step3.svg" alt="logo" fill />
            </div>
          </div>
          <div className="mx-auto w-full text-center">
            <button
              aria-label="get connected button"
              className="font-skia flex bg-lightblue hover:bg-darkblue dark:bg-btndark text-black rounded-xl ease-in-out duration-300 px-4 py-1 mx-auto text-para2"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default How;
