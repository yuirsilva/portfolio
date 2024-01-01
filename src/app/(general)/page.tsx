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
      {/* <div className="absolute inset-0 left-[calc(50%-px-32px)] top-2/4 h-[725px] w-[607px] -translate-y-2/4"> */}
      <div className="absolute inset-0 left-2/4 top-2/4 z-10 hidden h-full max-h-[40rem] w-full max-w-2xl -translate-x-2/4 -translate-y-2/4 sm:block">
        <World />
      </div>
      <Content />
      <Marquee />
    </div>
  );
};

export default page;
