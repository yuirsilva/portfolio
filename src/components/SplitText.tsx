"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";

interface SplitTextProps extends HTMLMotionProps<"div"> {
  highlight?: string | Array<string>;
}

const SplitText: FC<SplitTextProps> = ({
  children,
  highlight,
  className,
  custom,
  ...props
}) => {
  if (children) {
    const words = children.toString().split(" ");

    return words.map((word, i) => (
      <div
        key={i}
        className={"relative inline-block overflow-hidden " + className}
      >
        <motion.div
          // {...props}
          className={cn("test-block inline-block will-change-transform", {
            "text-primary": word === highlight?.[i - (2 % 4)],
          })}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    ));
  }
};

export default SplitText;
