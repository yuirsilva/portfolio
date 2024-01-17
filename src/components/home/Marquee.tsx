import { FC, HTMLAttributes, ReactNode } from "react";

export const MARQUEE =
  "A developer who can only write code in the form of haiku poems";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  nodes?: ReactNode;
  faster?: boolean;
}

const Marquee: FC<MarqueeProps> = ({ nodes, faster }) => {
  return [...Array(6)].map((_, i) => (
    <div
      key={i}
      className={`${faster ? "animate-slider-6" : "animate-slider"} px-1`}
    >
      <span className="flex w-max gap-5">{nodes}</span>
    </div>
  ));
};

export default Marquee;
