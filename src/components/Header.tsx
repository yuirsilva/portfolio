"use client";

import Icons from "@/components/Icons";
import MagneticButton from "@/components/MagneticButton";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/MenuButton";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-between px-12 pt-8 md:px-16">
      <div className="z-30">
        <MagneticButton>
          <Link href="/">
            <Icons.smLogo className="fill-primary transition-colors hover:fill-blue-600" />
          </Link>
        </MagneticButton>
      </div>
      <AnimatePresence mode="wait">
        {isActive ? <Menu state={isActive} /> : null}
      </AnimatePresence>
      <nav>
        <MenuButton state={isActive} setState={setActive} />
      </nav>
    </header>
  );
};

export default Header;
