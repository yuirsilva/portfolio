import Content from "@/components/home/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex justify-center overflow-hidden px-8 md:px-16">
      <Content />
    </div>
  );
};

export default page;
