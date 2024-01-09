type Info = Array<{
  text: string;
  className?: string;
  children?: React.ReactNode;
}>;

export const MenuInfo: Info = [
  {
    text: "Info",
    className: "text-xs text-muted-foreground",
  },
  {
    text: "Front-end / Creative",
  },
  {
    text: "Full-time / Freelance",
    children: <span className="lowercase">&nbsp;(available)</span>,
  },
  {
    text: "São Paulo, Brazil",
  },
  {
    text: "18Y",
  },
];
