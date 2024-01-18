"use client";

import Marquee from "@/components/home/Marquee";
import World from "@/components/home/World";
import Presentation from "@/components/Presentation";
import { email } from "@/content/social-links";
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
        className="relative grid h-full w-full place-content-center"
      >
        <div className="absolute left-1/2 top-1/2 hidden h-full max-h-[calc(100%-80px)] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 md:block">
          <World />
        </div>
        <div className="pointer-events-none flex w-fit flex-col uppercase text-foreground mix-blend-color-dodge *:flex *:justify-between md:text-white [&>div:last-child]:mt-10">
          <div>
            <p>Yuri Silva</p>
            <p>
              <span className="italic">available</span>—
              {new Date().getFullYear()}
            </p>
          </div>
          <p className="text-justify">
            I am creative developer from São Paulo, Brazil
          </p>
          <div className="pointer-events-auto items-baseline text-nowrap ">
            <div className="flex w-full justify-between sm:justify-normal hover:[&>:not(span)]:underline">
              <Link href="/about">About</Link>
              <span className="hidden sm:inline">,</span>{" "}
              <a href={email}>Contact</a>
            </div>
            <p className="hidden italic sm:block">Today, not tomorrow</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 flex w-36 -translate-x-1/2 overflow-hidden uppercase">
          <Marquee />
        </div>
      </motion.div>
    </section>
  );
};

export default Content;
