import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creative Developer",
};

const page = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <p className="uppercase">
        This website is currently under development 😆
      </p>
      <Link
        className="underline underline-offset-2"
        target="_blank"
        href="https://www.linkedin.com/in/yuirsilva/"
      >
        LINKEDIN
      </Link>
    </div>
  );
};

export default page;
