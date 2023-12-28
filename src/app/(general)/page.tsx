import Content from "@/components/home/Content";
import Marquee from "@/components/home/Marquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <Content />
      {/* <Marquee /> */}
    </div>
  );
};

export default page;
