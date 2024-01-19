"use client";

import MagneticButton from "@/components/MagneticButton";
import { TERTIARY_TRANSITION } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

interface MenuButtonProps {
  setState: Dispatch<SetStateAction<boolean>>;
  state: boolean;
}

const MenuButton: FC<MenuButtonProps> = ({ setState, state }) => {
  return (
    <MagneticButton className="h-full">
      <button
        onClick={() => setState(!state)}
        className="relative h-full w-14 overflow-hidden uppercase"
      >
        <motion.div
          className="relative h-full"
          animate={{ top: state ? "-100%" : "0" }}
          transition={TERTIARY_TRANSITION}
        >
          <div className="flex h-full w-full items-center justify-center">
            <span>Menu</span>
          </div>
          <div className="absolute top-full flex h-full w-full items-center justify-center">
            <span>Close</span>
          </div>
        </motion.div>
      </button>
    </MagneticButton>
  );
};

export default MenuButton;
