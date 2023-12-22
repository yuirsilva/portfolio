"use client";

import Icons from "@/components/Icons";
import MenuButton from "@/components/MenuButton";
import { FC, useState } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <header className="flex w-full justify-between px-12 pt-8 md:px-16">
      <div>
        <Icons.smLogo />
      </div>
      <nav>
        <MenuButton state={isActive} setState={setActive} />
      </nav>
    </header>
  );
};

export default Header;
