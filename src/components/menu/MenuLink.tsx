import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { FC, HTMLAttributes } from "react";

interface MenuLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  asExternal?: boolean;
  href: string;
}

const MenuLink: FC<MenuLinkProps> = ({
  asExternal,
  href,
  className,
  children,
}) => {
  const Comp = asExternal ? "a" : Link;

  return (
    <Comp
      className={cn(
        "font-semibold text-muted-foreground transition-colors [font-size:clamp(24px,calc(3vw+1rem+10%),64px)] hover:text-primary",
        className
      )}
      href={href}
    >
      {children}
    </Comp>
  );
};

export default MenuLink;
