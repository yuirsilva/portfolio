"use client";

import { MARQUEE } from "@/components/home/Marquee";
import Icons from "@/components/Icons";
import Background from "@/components/menu/Background";
import MenuLink from "@/components/menu/MenuLink";
import Portrait from "@/components/menu/portrait/Portrait";
import Roll from "@/components/Roll";
import { EASE_1 } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

interface MenuProps {
  state: boolean;
}

const menuVariants = {
  open: {
    y: "0%",
    transition: { ease: EASE_1, duration: 1 },
  },
  closed: {
    y: "-100%",
    transition: { ease: EASE_1, duration: 1 },
  },
};

const menuMainVariants = {
  open: {
    y: "0%",
    transition: { ease: EASE_1, duration: 1 },
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  closed: {
    y: "-100%",
    transition: { ease: EASE_1, duration: 1 },
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0), 0 4px 6px -4px rgb(0 0 0 / 0)",
  },
};

const Menu: FC<MenuProps> = ({ state }) => {
  return (
    <motion.div
      animate={state && { backgroundColor: "rgb(38 38 38 / 0.2)" }}
      initial={{ backgroundColor: "rgb(38 38 38 / 0)" }}
      exit={{ backgroundColor: "rgb(38 38 38 / 0)" }}
      className="fixed inset-0 z-40 h-full w-full"
    >
      <nav className="relative">
        {/* MAIN */}
        <motion.div
          className="relative z-40 flex h-fit flex-col justify-between gap-9 bg-secondary px-8 pb-12 pt-28 uppercase sm:flex-row sm:items-center md:px-16 md:py-28"
          variants={menuMainVariants}
          animate={state && "open"}
          initial="closed"
          exit="closed"
        >
          {/* INFO AND PHOTO */}
          <motion.div
            className="flex items-center gap-8"
            animate={state && "open"}
            initial="closed"
            exit="closed"
          >
            <div className="h-full max-h-40 w-full max-w-md">
              <Portrait />
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-xs text-muted-foreground">Info</p>
              <p>Front-end / Creative</p>
              <p>
                Full-time / Freelance{" "}
                <span className="lowercase">(available)</span>
              </p>
              <p>São Paulo, Brazil</p>
              <p>18Y</p>
            </div>
          </motion.div>
          {/* LINKS */}
          <nav className="flex flex-col gap-4 md:flex-row md:gap-8">
            <MenuLink href="/">Home</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink asExternal href="mailto:yuxipersonal@gmail.com">
              Contact
            </MenuLink>
          </nav>
        </motion.div>
        {/* BACK */}
        <motion.div
          className="absolute -bottom-28 left-0 right-0 top-0 z-30 w-full overflow-hidden bg-secondary uppercase"
          variants={menuVariants}
          animate={state && "open"}
          initial="closed"
          exit="closed"
        >
          <div className="relative flex h-full w-full items-end">
            <footer className="flex flex-1 justify-end p-8 sm:justify-between md:px-16 md:pb-8">
              <div className="hidden gap-1 sm:flex">
                <p>{MARQUEE}</p>
                <p>&#169; {new Date().getFullYear()}</p>
              </div>
              <div className="flex gap-4 *:flex *:items-center *:gap-2.5">
                <a href="https://CHANGE_THIS" className="group">
                  GitHub
                  <Roll
                    initial="top-full right-full"
                    thing={<Icons.topRightArrow />}
                  />
                </a>
                <a href="https://CHANGE_THIS" className="group">
                  LinkedIn
                  <Roll
                    initial="top-full right-full"
                    thing={<Icons.topRightArrow />}
                  />
                </a>
              </div>
            </footer>
            <Background.background className="pointer-events-none absolute bottom-0 select-none opacity-50" />
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Menu;
