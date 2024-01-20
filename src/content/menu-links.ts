import { email } from "@/content/social-links";

type Links = Array<{
  title: string;
  href: string;
}>;

export const MenuLinks: Links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: email,
  },
];
