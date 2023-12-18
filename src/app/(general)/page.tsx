import Presentation from "@/components/Presentation";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <Presentation />
      <p>this is the new black xd</p>
    </div>
  );
};

export default page;
