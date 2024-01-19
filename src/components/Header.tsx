"use client";

import Icons from "@/components/Icons";
import MagneticButton from "@/components/MagneticButton";
import Menu from "@/components/menu/Menu";
import MenuButton from "@/components/MenuButton";
import Link from "next/link";
import { FC, useState } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <header className="z-[990] px-8 pt-8">
      <div className="relative z-50 flex justify-between">
        <MagneticButton>
          <Link href="/">
            <Icons.smLogo className="fill-primary transition-colors hover:fill-muted-foreground" />
          </Link>
        </MagneticButton>
        <nav>
          <MenuButton state={isActive} setState={setActive} />
        </nav>
      </div>
      <Menu state={isActive} setState={setActive} />
    </header>
  );
};

export default Header;
