import Content from "@/components/home/Content";
import Marquee from "@/components/home/Marquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex justify-center px-8 md:px-16">
      <Content />
      <Marquee />
    </div>
  );
};

export default page;
