"use client";

import World from "@/components/about/World";
import SplitText from "@/components/SplitText";
import { useAnimate } from "framer-motion";
import { useRef } from "react";

const Content = () => {
  const canvas = useRef<HTMLDivElement>(null);
  const [scope, animate] = useAnimate();

  return (
    <div
      ref={scope}
      className="flex flex-col gap-20 *:flex *:flex-col *:items-center *:justify-center md:gap-40"
    >
      <section className="relative h-[70dvh] text-center uppercase">
        <div
          ref={canvas}
          className="absolute inset-0 left-1/2 top-1/2 z-10 aspect-square w-3/6 max-w-md -translate-x-1/2 -translate-y-1/2"
        >
          <World />
        </div>
        <h1 className="relative z-20 text-[clamp(32px,16vw,128px)] leading-none">
          Yuri Silva
        </h1>
        <p className="relative z-20">
          <span className="italic">(</span>Creative Developer
          <span className="italic">)</span>
        </p>
      </section>
      <section className="gap-5 text-pretty text-justify text-2xl md:text-4xl xl:text-5xl">
        <h1 className="leading-[1.12] [&>div:first-of-type]:indent-3 md:[&>div:first-of-type]:indent-6">
          <p className="inline-block align-text-bottom text-base text-muted-foreground">
            <span className="italic">(</span>about me
            <span className="italic">)</span>
          </p>
          <SplitText
            className="-my-[0.1em]"
            highlight={["front-end", "developer"]}
          >
            I&apos;m a front-end developer based in Brazil, dedicated to
            creating seamless and interactive web experiences that resonate with
            users. Focusing on the visual and interactive elements that make a
            website truly engaging.
          </SplitText>
        </h1>
        <h1 className="leading-[1.12] [&>*:first-child]:indent-3 md:[&>*:first-child]:indent-6">
          <SplitText
            className="-my-[0.1em]"
            highlight={["creative", "development,"]}
          >
            My goal is to focus on creative development, which is the aspect of
            the field that I am particularly fond of. The concept of merging
            design and code is what truly captivates me.
          </SplitText>
        </h1>
      </section>
    </div>
  );
};

export default Content;
