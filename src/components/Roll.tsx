import { cn } from "@/lib/utils";
import { FC, ReactElement } from "react";

const positions = {
  "top-full": "*:group-hover:-translate-y-full",
  "top-full right-full":
    "*:group-hover:translate-x-full *:group-hover:-translate-y-full",
  "right-full": "*:group-hover:translate-x-full",
  "bottom-full": "*:group-hover:translate-y-full",
  "left-full": "*:group-hover:-translate-x-full",
};

type RollType = keyof typeof positions;

interface RollProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string | number | ReactElement;
  initial?: RollType;
}

const Roll: FC<RollProps> = ({ text, className, initial = "bottom-full" }) => {
  // you need to add the tailwind "group" class to the parent for this component to work!
  // maybe i should implement a sort of -> add "group" class to parent when needed

  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden *:[transition:_transform_0.75s_cubic-bezier(0.19,1,0.22,1)]",
        positions[initial],
        className
      )}
    >
      <span className={cn("pointer-events-none absolute", initial)}>
        {text}
      </span>
      <span className="inline-block">{text}</span>
    </div>
  );
};

export default Roll;
