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
  ...props
}) => {
  if (children) {
    const words = children.toString().split(" ");

    return words.map((word, i) => (
      <div
        key={i}
        className={`relative inline-block overflow-hidden ${className ?? ""}`}
      >
        <motion.p
          {...props}
          className={cn(
            "animate-text-block inline-block will-change-transform",
            {
              "text-primary":
                highlight instanceof Array
                  ? highlight.includes(word)
                  : word === highlight,
            }
          )}
          custom={i}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.p>
      </div>
    ));
  }
};

export default SplitText;
