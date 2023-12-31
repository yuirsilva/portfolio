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
  // can't use "content" so "thing" is the worst I can do
  thing: string | ReactElement;
  initial?: RollType;
}

const Roll: FC<RollProps> = ({ thing, className, initial = "bottom-full" }) => {
  // you need to add the tailwind "group" class to the parent for this component to work!
  // maybe i should implement a sort of -> add "group" class to parent when needed
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden *:[transition:_transform_400ms_cubic-bezier(0.87,0,0.13,1)]",
        positions[initial],
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute whitespace-nowrap",
          initial
        )}
      >
        {thing}
      </span>
      <span className="inline-block">{thing}</span>
    </div>
  );
};

export default Roll;
