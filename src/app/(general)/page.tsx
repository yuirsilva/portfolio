import Content from "@/components/home/Content";
import Marquee from "@/components/home/Marquee";
import World from "@/components/home/World";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <div className="absolute inset-0 h-[725px] w-[607px]">
        <World />
      </div>
      <Content />
      <Marquee />
    </div>
  );
};

export default page;
