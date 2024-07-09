"use client";
import React from "react";
import { featuresData } from "./featuresData";
import SingleFeature from "./SingleFeature";
import LanguageFlipper from "./languageFlipper";
const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-2 lg:py-6 xl:py-6 my-6">
        <div id="spinning lang" className="mx-auto">
          <LanguageFlipper />
        </div>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <p className="mx-auto text-center text-lg"><b>MINERVA</b> has designed hardware to create a <b>WiFi network</b> with downloaded websites for use in environments<br />and communities that <span className="text-lightblue">lack are have restricted infrastructure and internet connectivity</span></p>
          {/* <!-- Section Title End --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
