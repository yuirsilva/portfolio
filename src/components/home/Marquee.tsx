import { FC, ReactNode } from "react";

export const MARQUEE =
  "A developer who can only write code in the form of haiku poems";

interface MarqueeProps {
  content?: ReactNode;
}

const Marquee: FC<MarqueeProps> = ({ content = MARQUEE }) => {
  return (
    <div className="absolute bottom-14 flex w-36 select-none overflow-hidden uppercase">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="animate-slider px-1">
          <span className="block w-max">{content}</span>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
