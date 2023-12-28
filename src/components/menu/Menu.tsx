"use client";

import { MARQUEE } from "@/components/home/Marquee";
import MenuLink from "@/components/menu/MenuLink";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface MenuProps {
  state: boolean;
}

export const menuVariants = {
  open: {
    y: "0%",
    transition: { ease: [0.5, 0, 0, 1], duration: 1.4 },
  },
  closed: {
    y: "-100%",
    transition: { ease: [0.5, 0, 0, 1], duration: 1.4 },
  },
};

const Menu: FC<MenuProps> = ({ state }) => {
  return (
    <motion.div
      variants={menuVariants}
      animate={state && "open"}
      initial="closed"
      exit="closed"
      // className="fixed inset-0 z-40 flex flex-col justify-end bg-secondary px-12 py-8 uppercase md:px-16 xl:h-fit"
      className="fixed inset-0 z-40 flex flex-col justify-end bg-secondary px-12 py-8 uppercase md:px-16 lg:h-fit"
    >
      {/* INFO AND PHOTO */}
      <motion.div
        variants={menuVariants}
        animate={state && "open"}
        initial="closed"
        exit="closed"
        className="fixed inset-0 flex h-fit items-center gap-10 bg-secondary px-12 py-24 drop-shadow-lg min-[420px]:py-32 lg:w-fit lg:py-20"
      >
        <div className="flex flex-col gap-2 text-sm min-[420px]:text-base">
          <p className="text-xs text-muted-foreground">Info</p>
          <p>Front-end / Creative</p>
          <p>
            Full-time / Freelance <span className="lowercase">(available)</span>
          </p>
          <p>São Paulo, Brazil</p>
          <p>18Y</p>
        </div>
        <Image
          width={160}
          height={200}
          alt="Photo of Yuri Silva"
          src="https://placehold.co/320x400.png"
          className="hidden xl:block"
        />
      </motion.div>
      {/* LINKS */}
      <div className="flex flex-1 flex-col justify-between gap-4 sm:gap-6">
        <nav className="flex flex-1 flex-col justify-end gap-3 lg:flex-row lg:items-end lg:justify-end lg:gap-5 lg:py-28 2xl:items-center 2xl:justify-end 2xl:gap-11 2xl:py-36">
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink asExternal href="mailto:yuxipersonal@gmail.com">
            Contact
          </MenuLink>
        </nav>
        <footer className="flex flex-wrap justify-end gap-4 md:justify-between">
          <Separator />
          <p className="hidden md:block">
            {MARQUEE}. © {new Date().getFullYear()}
          </p>
          <div className="space-x-4 whitespace-nowrap">
            <a href="https://CHANGE_THIS">LinkedIn ↗</a>
            <a href="https://CHANGE_THIS">GitHub ↗</a>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Menu;
