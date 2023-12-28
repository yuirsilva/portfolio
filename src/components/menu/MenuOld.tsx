"use client";

import { MARQUEE } from "@/components/home/Marquee";
import MenuLink from "@/components/menu/MenuLink";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

import { Separator } from "../ui/separator";

interface MenuProps {
  state: boolean;
}

const variants = {
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
      variants={variants}
      animate={state && "open"}
      initial="closed"
      exit="closed"
      className="fixed inset-0 flex w-full flex-col justify-between bg-secondary px-12 py-8 uppercase md:px-16 xl:h-[512px]"
    >
      {/* INFO AND PHOTO */}
      <motion.div
        variants={variants}
        animate={state && "open"}
        initial="closed"
        exit="closed"
        className="fixed inset-0 flex h-[clamp(336px,calc(16rem_+_8vh),512px)] items-center justify-between gap-10 bg-secondary px-12 shadow-lg sm:py-8 md:px-16 xl:h-[calc(100%-4rem)] xl:w-fit"
      >
        {/* INFO */}
        <div className="space-y-2 text-sm sm:text-base">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            Info
          </p>
          <div className="space-y-2">
            <p>
              Front-end / Creative{" "}
              <span className="lowercase">(experimenting)</span>
            </p>
            <p>
              Full-time / Freelance{" "}
              <span className="lowercase">(available)</span>
            </p>
            <p>São Paulo, Brazil</p>
            <p>18Y</p>
          </div>
        </div>
        {/* PHOTO */}
        <Image
          width={160}
          height={200}
          alt="Yuri Silva's photo"
          src="https://placehold.co/320x400.png"
          className="hidden sm:block"
        />
      </motion.div>
      <nav className="mt-auto flex w-full max-w-4xl flex-col gap-6 lg:ml-auto lg:flex-row lg:justify-end lg:gap-16 xl:my-auto">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink asExternal href="mailto:yuxipersonal@gmail.com">
          Contact
        </MenuLink>
      </nav>
      <Separator className="my-4" />
      <footer className="flex w-full justify-between">
        <p className="hidden sm:block">
          {MARQUEE}. © {new Date().getFullYear()}
        </p>
        <div className="ml-auto flex gap-4 whitespace-nowrap">
          <a href="https://CHANGE_THIS">LinkedIn ↗</a>
          <a href="https://CHANGE_THIS">GitHub ↗</a>
        </div>
      </footer>
    </motion.div>
  );
};

export default Menu;
