"use client";
import Image from "next/image";
import { Content } from "@/types/content";
import Link from "next/link";
import { motion } from "framer-motion";

const ContentItem = ({ content }: { content: Content }) => {
  const { image, title, metadata } = content;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
      >
        <Link href={`/content/`} className="block relative aspect-[368/239]">
          <Image src={image} alt={title} fill />
        </Link>

        <div className="px-4">
          <h4 className="font-medium text-lg xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5">
            {title}
          </h4>
          <p>{metadata ? metadata : ""}</p>
        </div>
      </motion.div>
    </>
  );
};

export default ContentItem;
