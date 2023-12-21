"use client";

import { AnimationSequence, motion, stagger, useAnimate } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface PresentationProps {
  ease?: Array<number>;
  setState: Dispatch<SetStateAction<boolean>>;
}

const Presentation: FC<PresentationProps> = ({
  ease = [0.5, 0, 0, 1],
  setState,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence = [
      ["path", { opacity: 1 }, { delay: stagger(0.4), duration: 0.8 }],
      [".text", { y: ["100%", "-100%"] }, { duration: 1.4, ease, at: "<" }],
    ] as AnimationSequence;

    animate(sequence).then(() => {
      setState(true);
    });
  }, []);

  return (
    <motion.div
      ref={scope}
      className="absolute inset-0 flex h-full w-full select-none flex-col items-center justify-center gap-8 overflow-hidden bg-secondary"
      exit={{ y: "-100%", transition: { ease, duration: 1.2 } }}
    >
      {/* logo */}
      <svg width="112" height="62" viewBox="0 0 112 62">
        <path
          d="M15 62C6.71573 62 8.00843e-08 55.2843 1.78873e-07 47C2.77662e-07 38.7157 6.71573 32 15 32L50 32L50 45.3333C50 46.8811 50 47.6549 49.9429 48.3073C49.3085 55.559 43.559 61.3085 36.3073 61.9429C35.6549 62 34.8811 62 33.3333 62L15 62Z"
          className="fill-primary"
          opacity={0}
        />
        <path
          d="M20 15C20 6.71573 26.7157 0 35 0C43.2843 0 50 6.71573 50 15V30H35C26.7157 30 20 23.2843 20 15Z"
          className="fill-primary"
          opacity={0}
        />
        <path
          d="M52 20C52 15.3501 52 13.0252 52.5111 11.1177C53.8981 5.94133 57.9413 1.89812 63.1177 0.511113C65.0252 0 67.3501 0 72 0H97C105.284 0 112 6.71573 112 15C112 23.2843 105.284 30 97 30H52V20Z"
          className="fill-primary"
          opacity={0}
        />
      </svg>

      <div className="relative overflow-hidden">
        <div className="text relative translate-y-full lowercase">
          <p className="absolute top-full text-muted-foreground">
            you fall, you rise, you grind again.
          </p>

          <p className="text-muted-foreground">
            you fall, you rise, you grind again.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Presentation;
