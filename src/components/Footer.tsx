import MagneticButton from "@/components/MagneticButton";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex w-full justify-between px-12 pb-8 md:px-16">
      <p>
        yuri silva—<span>{new Date().getFullYear()}</span>
      </p>
      <div className="flex gap-6 uppercase">
        <MagneticButton>
          <a href="https://CHANGE_THIS">LinkedIn</a>
        </MagneticButton>
        <MagneticButton>
          <a href="mailto:yuxipersonal@gmail.com">Contact</a>
        </MagneticButton>
      </div>
    </footer>
  );
};

export default Footer;
