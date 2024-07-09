import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Testimonial from "@/components/Testimonial";
import How from "@/components/How";

export const metadata: Metadata = {
  title: "Minerva",
  description: "Minerva Home",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <How />
      {/* <Feature /> */}
      <About />
      {/* <FunFact /> */}
      <Contact />
      {/* <FeaturesTab /> */}

      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}

      {/* <Content /> */}
    </main>
  );
}
