"use client";

import { MARQUEE } from "@/components/home/Marquee";
import Icons from "@/components/Icons";
import Background from "@/components/menu/Background";
import MenuLink from "@/components/menu/MenuLink";
import {
  menuBackgroundVariants,
  menuMainVariants,
  menuVariants,
} from "@/components/menu/MenuVariants";
import Portrait from "@/components/menu/portrait/Portrait";
import Roll from "@/components/Roll";
import { motion } from "framer-motion";
import { FC } from "react";

interface MenuProps {
  state: boolean;
}

const Menu: FC<MenuProps> = ({ state }) => {
  return (
    <motion.div
      variants={menuBackgroundVariants}
      animate={state ? "open" : "closed"}
      initial="closed"
      className="fixed inset-0 z-40 h-full w-full"
    >
      <nav className="relative">
        {/* MAIN */}
        <motion.div
          className="relative z-40 flex h-fit flex-col justify-between gap-9 bg-secondary px-8 pb-12 pt-28 uppercase sm:flex-row sm:items-center md:px-16 md:py-28"
          variants={menuMainVariants}
          animate={state ? "open" : "closed"}
          initial="closed"
        >
          {/* INFO AND PHOTO */}
          <motion.div
            className="flex items-center gap-8"
            animate={state ? "open" : "closed"}
            initial="closed"
          >
            <div className="hidden h-full max-h-44 w-full max-w-xs xl:block 2xl:max-w-md">
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
          <nav className="flex flex-col gap-4 sm:items-end md:gap-8 lg:flex-row">
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
          animate={state ? "open" : "closed"}
          initial="closed"
        >
          <div className="relative flex h-full w-full items-end">
            <footer className="flex flex-1 justify-end p-8 sm:justify-between md:px-16 md:pb-8">
              <div className="group hidden select-none sm:flex">
                <Roll
                  className="hidden sm:block sm:max-lg:max-w-72"
                  initial="top-full"
                  text={MARQUEE + " " + "©" + new Date().getFullYear()}
                />
                {/* &nbsp;
                <p>&#169; {new Date().getFullYear()}</p> */}
              </div>
              <div className="flex gap-4 *:flex *:items-center *:gap-2.5">
                <a href="https://CHANGE_THIS" className="group">
                  GitHub
                  <Roll
                    initial="top-full right-full"
                    text={<Icons.topRightArrow className="size-4" />}
                  />
                </a>
                <a href="https://CHANGE_THIS" className="group">
                  LinkedIn
                  <Roll
                    initial="top-full right-full"
                    text={<Icons.topRightArrow className="size-4" />}
                  />
                </a>
              </div>
            </footer>
            <Background className="pointer-events-none absolute bottom-0 select-none opacity-50" />
          </div>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Menu;
