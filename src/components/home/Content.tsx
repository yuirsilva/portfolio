"use client";

import Presentation from "@/components/Presentation";
import { EASE_1 } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  const [isFinished, setFinished] = useState<boolean>(false);

  return (
    <div className="flex w-2/4 flex-col gap-6 uppercase sm:self-end">
      <AnimatePresence mode="wait">
        {isFinished ? null : (
          <Presentation setState={setFinished} ease={EASE_1} />
        )}
      </AnimatePresence>
      <p className="max-w-60 text-justify leading-6 sm:max-w-[448px]">
        Yuri → Front-end developer based in São Paulo, Brazil 💚. I love smooth
        animations, 3D and "crazy" web experiences.
      </p>
      <Link href="/about" className="lowercase underline underline-offset-2">
        about me
      </Link>
    </div>
  );
};

export default Content;
