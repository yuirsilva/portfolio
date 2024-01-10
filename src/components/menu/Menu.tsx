"use client";

import { MARQUEE } from "@/components/home/Marquee";
import Icons from "@/components/Icons";
import Background from "@/components/menu/Background";
import {
  infoVariants,
  menuBackgroundVariants,
  menuMainVariants,
  menuVariants,
  navVariants,
  portraitVariants,
} from "@/components/menu/MenuVariants";
import Portrait from "@/components/menu/portrait/Portrait";
import Roll from "@/components/Roll";
import { MenuInfo } from "@/content/menu-info";
import { MenuLinks } from "@/content/menu-links";
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
            <motion.div
              variants={portraitVariants}
              initial="closed"
              animate={state ? "open" : "closed"}
              className="hidden h-full max-h-44 w-full max-w-xs xl:block 2xl:max-w-md"
            >
              <Portrait />
            </motion.div>
            <div className="space-y-1 text-sm">
              {MenuInfo.map((info, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.p
                    className={info.className + " block"}
                    variants={infoVariants}
                    initial="closed"
                    animate={state ? "open" : "closed"}
                    custom={i}
                  >
                    {info.text}
                    {info.children}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* LINKS */}
          <nav className="flex flex-col gap-4 sm:items-end md:gap-8 lg:flex-row">
            {MenuLinks.map((link, i) => (
              <div key={i} className="overflow-hidden">
                <motion.a
                  variants={navVariants}
                  initial="closed"
                  animate={state ? "open" : "closed"}
                  custom={i}
                  href={link.href}
                  className="block font-semibold text-muted-foreground transition-colors [font-size:clamp(36px,calc(5vw+1rem+10%),48px)] hover:text-primary 2xl:text-6xl"
                >
                  {link.title}
                </motion.a>
              </div>
            ))}
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
