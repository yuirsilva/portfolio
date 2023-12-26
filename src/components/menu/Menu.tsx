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
      className="fixed inset-0 flex h-full w-full flex-col justify-between bg-secondary px-12 py-8 uppercase sm:h-[512px] md:px-16"
    >
      {/* INFO AND PHOTO */}
      <motion.div
        variants={variants}
        animate={state && "open"}
        initial="closed"
        exit="closed"
        className="fixed inset-0 flex h-fit w-fit items-center gap-10 bg-secondary px-12 py-24 shadow-lg md:px-16"
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
      <div className="mt-auto flex w-full items-center sm:my-auto sm:justify-end">
        {/* LINKS */}
        <nav className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink asExternal href="mailto:yuxipersonal@gmail.com">
            Contact
          </MenuLink>
        </nav>
      </div>

      <footer className="flex w-full flex-wrap justify-between">
        <Separator className="my-4" />
        <p className="hidden sm:block">
          {MARQUEE}. © {new Date().getFullYear()}
        </p>
        <div className="ml-auto space-x-4">
          <a href="https://CHANGE_THIS">LinkedIn ↗</a>
          <a href="https://CHANGE_THIS">GitHub ↗</a>
        </div>
      </footer>
    </motion.div>
  );
};

export default Menu;
