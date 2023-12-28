import { cn } from "@/lib/utils";
import { FC } from "react";

interface RollProps {
  content: string;
  initial?: "top-full" | "right-full" | "bottom-full" | "left-full";
}

const positions = {
  "top-full": "*:group-hover:-translate-y-full",
  "right-full": "*:group-hover:translate-x-full",
  "bottom-full": "*:group-hover:translate-y-full",
  "left-full": "*:group-hover:-translate-x-full",
};

const Roll: FC<RollProps> = ({ content, initial = "bottom-full" }) => {
  // maybe i should implement a sort of -> add "group" class to parent when needed
  return (
    <div
      className={cn(
        "relative inline-flex overflow-hidden *:[transition:_transform_300ms_cubic-bezier(0.8,0,0,1)]",
        positions[initial]
      )}
    >
      <span className={cn("pointer-events-none absolute", initial)}>
        {content}
      </span>
      <span className="inline-block">{content}</span>
    </div>
  );
};

export default Roll;
