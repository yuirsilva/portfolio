"use client";

import World from "@/components/home/World";
import Presentation from "@/components/Presentation";
import { EASE_1 } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, Fragment, useState } from "react";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  const [isFinished, setFinished] = useState<boolean>(false);

  return (
    <Fragment>
      <div className="absolute inset-0 left-[14%] top-2/4 hidden h-full max-h-[40rem] w-[clamp(320px,50vw,672px)] max-w-2xl -translate-x-2/4 -translate-y-2/4 sm:block xl:left-[21%] 2xl:left-1/4">
        <World />
      </div>
      <div className="flex w-2/4 flex-col gap-6 uppercase sm:self-end">
        {/* <AnimatePresence mode="wait">
          {isFinished ? null : (
            <Presentation setState={setFinished} ease={EASE_1} />
          )}
        </AnimatePresence> */}
        <p className="max-w-60 text-justify leading-6 sm:max-w-md">
          Yuri → Front-end developer based in São Paulo, Brazil 💚. I love
          smooth animations, 3D and "crazy" web experiences.
        </p>
        <Link href="/about" className="lowercase underline underline-offset-2">
          about me
        </Link>
      </div>
    </Fragment>
  );
};

export default Content;
