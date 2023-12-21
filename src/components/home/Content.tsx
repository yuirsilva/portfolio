"use client";

import Presentation from "@/components/Presentation";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  const [isFinished, setFinished] = useState<boolean>(false);

  return (
    <div className="flex w-2/4 flex-col gap-6 self-end uppercase">
      <AnimatePresence mode="wait">
        {isFinished ? null : <Presentation setState={setFinished} />}
      </AnimatePresence>
      <p className="max-w-md text-justify leading-6">
        Yuri → Front-end developer based in São Paulo, Brazil 💚. I love smooth
        animations, 3D and "crazy" web experiences.
      </p>
      <Link href="/about" className="underline underline-offset-2">
        about me
      </Link>
    </div>
  );
};

export default Content;
