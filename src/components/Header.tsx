import Icons from "@/components/Icons";
import { FC } from "react";

import MagneticButton from "./MagneticButton";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex w-full justify-between px-12 pt-8 md:px-16">
      <div>
        <Icons.smLogo />
      </div>
      <nav>
        <MagneticButton>
          <button className="uppercase">Menu</button>
        </MagneticButton>
      </nav>
    </header>
  );
};

export default Header;
