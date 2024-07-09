"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      {/* max-w-c-1390 */}
      <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-4">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-7.5 lg:gap-12.5 xl:gap-29 justify-center items-center">

            {brandData.map((brand, key) => (
              <div className="flex items-center justify-center">
                <SingleBrand brand={brand} key={key} />
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
