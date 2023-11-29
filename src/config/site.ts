import { SiteConfig } from "@/types";

export const baseUrl = process.env["NEXT_PUBLIC_VERCEL_URL"]
  ? `https://${process.env["NEXT_PUBLIC_VERCEL_URL"]}`
  : "http://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "Yuri Silva",
  description:
    "My personal portfolio (v2).",
  url: baseUrl,
};