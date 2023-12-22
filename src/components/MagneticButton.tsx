"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC, HTMLAttributes, PointerEvent, useRef, useState } from "react";

interface MagneticButtonProps extends HTMLAttributes<HTMLDivElement> {}

interface Position {
  x: number;
  y: number;
}

const MagneticButton: FC<MagneticButtonProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const handlePointer = (e: PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={cn("relative", className)}
      ref={ref}
      onPointerMove={handlePointer}
      onPointerLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
