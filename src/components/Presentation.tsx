"use client";

import { EASE_2 } from "@/lib/utils";
import { AnimationSequence, motion, stagger, useAnimate } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface PresentationProps {
  ease?: Array<number>;
  setState: Dispatch<SetStateAction<boolean>>;
}

const Presentation: FC<PresentationProps> = ({ ease = EASE_2, setState }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = [
      ["path", { opacity: 1 }, { delay: stagger(0.4), duration: 0.8 }],
      [".text", { y: ["100%", "-100%"] }, { duration: 1.4, ease, at: "<" }],
      [".text", { y: "-200%" }, { duration: 1.4, ease }],
    ] as AnimationSequence;

    animate(sequence).then(() => {
      setState(true);
    });
  }, []);

  return (
    <motion.div
      ref={scope}
      className="absolute inset-0 z-[999] flex h-full w-full select-none flex-col items-center justify-center gap-4 overflow-hidden bg-secondary lowercase"
      exit={{ y: "-100%", transition: { ease, duration: 1.2 } }}
    >
      <svg width="57" height="32" viewBox="0 0 57 32">
        <path
          className="fill-primary"
          d="M7.5 32C3.35786 32 4.00421e-08 28.6421 8.94366e-08 24.5C1.38831e-07 20.3579 3.35787 17 7.5 17L25 17L25 27C25 29.7614 22.7614 32 20 32L7.5 32Z"
          opacity={0}
        />
        <path
          className="fill-primary"
          d="M10 7.5C10 3.35786 13.3579 0 17.5 0C21.6421 0 25 3.35786 25 7.5V15H17.5C13.3579 15 10 11.6421 10 7.5Z"
          opacity={0}
        />
        <path
          className="fill-primary"
          d="M27 6C27 2.68629 29.6863 0 33 0H49.5C53.6421 0 57 3.35786 57 7.5C57 11.6421 53.6421 15 49.5 15H27V6Z"
          opacity={0}
        />
      </svg>

      <div className="relative overflow-hidden">
        <p className="invisible text-muted-foreground">
          you fall, you rise, you grind again.
        </p>
        <div className="text absolute inset-0 text-center">
          <p className="text-muted-foreground">
            you fall, you rise, you grind again.
          </p>
          <p className="text-muted-foreground">
            you fall, you rise, you grind again.
          </p>
          <p className="uppercase text-foreground">yuri silva</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Presentation;
