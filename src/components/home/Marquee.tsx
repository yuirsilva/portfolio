import { forwardRef, ReactNode } from "react";

export const MARQUEE =
  "A developer who can only write code in the form of haiku poems";

interface MarqueeProps {
  content?: ReactNode;
}

const Marquee = forwardRef<HTMLDivElement, MarqueeProps>(
  ({ content = MARQUEE }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute bottom-4 left-2/4 flex w-36 -translate-x-2/4 select-none overflow-hidden uppercase"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="animate-slider px-1">
            <span className="block w-max">{content}</span>
          </div>
        ))}
      </div>
    );
  }
);
Marquee.displayName = "Marquee";

export default Marquee;
