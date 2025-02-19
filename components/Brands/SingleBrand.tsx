import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        // h-10 mx-w-full w-[98px]
        className="animate_top block relative mx-w-full w-[120px]"
      >
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100"
          src={image}
          alt={name}
          height={200}
          width={200}
        />
        <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100"
          src={imageLight}
          alt={name}
          height={200}
          width={200}
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
