"use client";

import Marquee from "@/components/home/Marquee";
import World from "@/components/home/World";
import Presentation from "@/components/Presentation";
import { EASE_2 } from "@/lib/utils";
import { AnimationSequence, motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Content = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const presentation = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const marquee = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = [
      [
        "path",
        { opacity: 1 },
        { duration: 0.75, ease: EASE_2, delay: stagger(0.375) },
      ],
      [
        ".text",
        { y: ["100%", "-100%"] },
        { duration: 1, ease: EASE_2, at: "<", delay: 1 },
      ],
      [".text", { y: "-200%" }, { duration: 0.75, ease: EASE_2 }],
      ["path", { opacity: 0 }, { duration: 0.75, ease: EASE_2 }],

      [
        presentation.current,
        { y: "-100%" },
        { ease: EASE_2, duration: 1.4, at: "-0.75" },
      ],

      [
        content.current,
        { y: ["50%", "0%"] },
        { duration: 1.4, ease: EASE_2, at: "-1.4" },
      ],
      [
        marquee.current,
        { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] },
        { ease: EASE_2, duration: 0.75, at: "-0.4" },
      ],
    ] as AnimationSequence;

    animate(sequence).then(() =>
      scope.current.removeChild(presentation.current!)
    );
  }, []);

  return (
    <section ref={scope} className="flex h-full w-full justify-center">
      <Presentation ref={presentation} />
      <motion.div
        ref={content}
        className="relative grid h-full w-full auto-cols-fr grid-flow-col items-center gap-6 md:justify-start"
      >
        <div className="row-auto mx-auto hidden h-full max-h-[calc(100%-80px)] w-full max-w-2xl md:block">
          <World />
        </div>
        <div className="flex flex-col gap-6 justify-self-center uppercase md:justify-self-start">
          <p className="max-w-60 text-justify leading-6 sm:max-w-80 lg:max-w-md">
            Yuri → Front-end developer based in São Paulo, Brazil 💚. I love
            smooth animations, 3D and &quot;crazy&quot; web experiences.
          </p>
          <Link
            href="/about"
            className="lowercase underline underline-offset-2"
          >
            about me
          </Link>
        </div>
        <Marquee ref={marquee} />
      </motion.div>
    </section>
  );
};

export default Content;
