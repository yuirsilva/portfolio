import MagneticButton from "@/components/MagneticButton";
import Roll from "@/components/Roll";
import { email, linkedin } from "@/content/social-links";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex justify-between px-8 pb-8 max-[320px]:justify-end">
      <div className="group select-none">
        <Roll
          initial="top-full"
          className="max-[320px]:hidden"
          text="yuri silva"
        />
      </div>
      <div className="flex gap-6 uppercase">
        <MagneticButton>
          <a href={linkedin}>LinkedIn</a>
        </MagneticButton>
        <MagneticButton>
          <a href={email}>Contact</a>
        </MagneticButton>
      </div>
    </footer>
  );
};

export default Footer;
