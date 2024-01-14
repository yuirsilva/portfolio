import MagneticButton from "@/components/MagneticButton";
import Roll from "@/components/Roll";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex justify-between px-8 pb-8 max-[320px]:justify-end md:px-16">
      <div className="group select-none">
        <Roll
          initial="top-full"
          className="max-[320px]:hidden"
          text="yuri silva"
        />
      </div>
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
