import { fallback, link, main, top } from "@/app/api/readme/components";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const theme = (searchParams.get("theme") ?? "light") as "light" | "dark";
  const section = searchParams.get("section") ?? "";
  let content;

  //   content = top({ height: 20, theme });
  if (section === "top") {
    content = top({ height: 20, theme });
  } else if (section === "link-website") {
    content = link({ height: 20, width: 100, theme })("Portfolio");
  } else if (section === "link-linkedin") {
    content = link({ height: 20, width: 100, theme })("LinkedIn");
  } else if (section === "link-twitter") {
    content = link({ height: 20, width: 100, theme })("Twitter (X)");
  } else if (section === "fallback") {
    content = fallback({ height: 180, width: 420, theme });
  } else {
    content = main({ height: 250, theme });
  }

  return new Response(content, {
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      pragma: "no-cache",
      expires: "0",
    },
  });
}
