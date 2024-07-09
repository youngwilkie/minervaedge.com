"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import Contact from "@/components/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <div className="h-full w-full">
      <div className="hidden md:block">
        <Contact />
      </div>
      <div className="block sm:hidden">
        <div className="mx-auto md:max-w-c-1154 px-4 md:px-8 pt-20 md:pt-25 pb-200">
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: "",
                subtitle: `Contact Us`,
                description: `Complete to below form to request Minerva Team to reach out to you.`,
              }}
            />
          </div>
          <div className="h-full w-full">
            <iframe
              width="100%"
              height="1100px"
              src="https://forms.office.com/Pages/ResponsePage.aspx?id=rX8DTIH3e0eMKtC0jbWNnli5GzKxxjNDqJeNWbysLAdUQzAzN0pSODNYWkNHVkE1U1ZIQTBTTE5NWC4u&embed=true"
              className="border: none; max-width:100%; max-height:100vh"
            />
          </div>
        </div>
        ;
      </div>
    </div>
  );
};
// <div className="block sm:hidden flex items-center gap-8 px-5">

export default ContactPage;

{
}
