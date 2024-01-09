import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "@/style/globals.css";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { baseUrl, siteConfig } from "@/config/site";

const neue = localFont({
  src: "../font/HelveticaNowDisplayRegular.woff2",
  variable: "--font-neue",
});

const mono = localFont({
  src: "../font/Favorit-Mono.woff2",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} — %s`,
  },
  description: siteConfig.description,
  keywords: ["Frontend", "Creative Developer", "Digital", "Motion"],
  authors: [
    {
      name: "Yuri Silva",
      url: baseUrl,
    },
  ],
  creator: "Yuri Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: "@yuirsilva",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen font-sans antialiased ${neue.variable} ${mono.variable}`}
      >
        <main className="relative flex min-h-screen flex-col">
          {/* <div className="flex flex-1 flex-col"> */}
          <div className="grid flex-1 grid-rows-fill">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
