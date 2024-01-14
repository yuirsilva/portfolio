"use client";

import World from "@/components/about/World";
import SplitText from "@/components/SplitText";
import { SECONDARY_TRANSITION } from "@/lib/utils";
import { AnimationSequence, stagger, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const Content = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!canvas.current) return;

    const sequence: AnimationSequence = [
      [canvas.current, { opacity: [0, 1] }, SECONDARY_TRANSITION],
      [
        ".animate-text-block",
        { y: ["100%", "0%"], skewX: ["45deg", "0deg"] },
        { ...SECONDARY_TRANSITION, delay: stagger(0.02) },
      ],
    ];

    animate(sequence);
  }, []);

  return (
    <section ref={scope} className="flex flex-col gap-10 md:flex-row">
      <div
        ref={canvas}
        className="relative mx-auto aspect-square h-0 w-full flex-1 pb-[50%] md:sticky md:top-5"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <World />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-10 text-2xl md:text-5xl">
        <h1 className="leading-[1.139]">
          <SplitText
            className="-my-[0.1em]"
            highlight={["front-end", "developer,"]}
          >
            I&#8217;m a front-end developer, dedicated to creating seamless,
            interactive web experiences that resonate with users. Focusing on
            the visual and interactive elements that make a website truly
            engaging.
          </SplitText>
        </h1>
        <h1 className="leading-[1.139]">
          <SplitText className="-my-[0.1em]" highlight={"life."}>
            I specialize in crafting scalable, user-friendly websites from
            scratch, ensuring they align perfectly with the design vision. My
            focus is on creating dynamic and interactive elements, leveraging
            the power of JavaScript to bring web pages to life. I&apos;m also
            adept at handling micro animations and transitions, which add a
            layer of polish and sophistication to the user experience.
          </SplitText>
        </h1>
      </div>
    </section>
  );
};

export default Content;
