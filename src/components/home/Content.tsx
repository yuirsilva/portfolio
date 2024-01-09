"use client";

import World from "@/components/home/World";
import Presentation from "@/components/Presentation";
import { EASE_1 } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC, Fragment, useState } from "react";

interface ContentProps {}

const Content: FC<ContentProps> = () => {
  const [isFinished, setFinished] = useState<boolean>(false);

  return (
    <motion.div className="grid h-full w-full auto-cols-fr grid-flow-col items-center gap-6 md:justify-start">
      <div className="row-auto mx-auto hidden h-full max-h-[40rem] w-full max-w-2xl md:block">
        <World />
      </div>
      <div className="flex flex-col gap-6 justify-self-center uppercase md:justify-self-start">
        {/* <AnimatePresence mode="wait">
          {isFinished ? null : (
            <Presentation setState={setFinished} ease={EASE_1} />
          )}
        </AnimatePresence> */}
        <p className="max-w-60 text-justify leading-6 sm:max-w-80 lg:max-w-md">
          Yuri → Front-end developer based in São Paulo, Brazil 💚. I love
          smooth animations, 3D and &quot;crazy&quot; web experiences.
        </p>
        <Link href="/about" className="lowercase underline underline-offset-2">
          about me
        </Link>
      </div>
    </motion.div>
  );
};

export default Content;
