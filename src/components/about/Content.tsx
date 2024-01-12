"use client";

import World from "@/components/about/World";
import { Fragment } from "react";

const Content = () => {
  return (
    <Fragment>
      <div className="relative mx-auto h-0 w-full pb-[100%] md:sticky md:top-5">
        <div className="absolute bottom-0 left-0 right-0 top-0">
          <World />
        </div>
      </div>
      <div className="flex flex-col gap-10 text-2xl md:text-5xl">
        <p className="text-balance indent-8">
          I&#8217;m a <span className="text-primary">front-end developer</span>,
          dedicated to creating seamless, interactive web experiences that
          resonate with users. Focusing on the visual and interactive elements
          that make a website truly engaging.
        </p>
        <p className="text-balance indent-8">
          I specialize in crafting scalable, user-friendly websites from
          scratch, ensuring they align perfectly with the design vision. My
          focus is on creating dynamic and interactive elements, leveraging the
          power of JavaScript to bring web pages to life. I&apos;m also adept at
          handling micro animations and transitions, which add a layer of polish
          and sophistication to the user experience.
        </p>
      </div>
    </Fragment>
  );
};

export default Content;
