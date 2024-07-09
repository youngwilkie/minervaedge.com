import React from "react";
import SectionHeader from "../Common/SectionHeader";
import ContentItem from "./ContentItem";
import ContentData from "./contentData";

const Content = async () => {
  return (
    <section className="py-0 lg:py-0 xl:py-0">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: `Content and Resources`,
              description: `The Minerva device comes preloaded with a variety of resources to support education, health, and community development. The device is also designed to be easily updated with new content and resources as needed.`
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {ContentData.map((content, key) => (
            <ContentItem content={content} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
