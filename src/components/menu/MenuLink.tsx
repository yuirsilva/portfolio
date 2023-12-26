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
        "text-4xl font-semibold text-muted-foreground transition-colors hover:text-primary md:text-6xl",
        className
      )}
      href={href}
    >
      {children}
    </Comp>
  );
};

export default MenuLink;
