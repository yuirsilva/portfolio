import Content from "@/components/about/Content";
import Marquee from "@/components/home/Marquee";
import SmoothScroll from "@/components/SmoothScroll";
import { Separator } from "@/components/ui/separator";
import { technologies } from "@/content/about-tech";
import { email } from "@/content/social-links";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <section className="container flex flex-col items-center justify-center gap-20 overflow-hidden md:gap-40">
      <SmoothScroll />
      <Content />
      <section className="w-full space-y-5 uppercase">
        <h1>
          <span className="italic">(</span>Technologies in my Arsenal
          <span className="italic">)</span>
        </h1>
        <ul className="text-xs sm:text-base md:text-lg">
          {technologies.map((items, i) => (
            <li key={`line${i}`}>
              <Separator />
              <div className="flex flex-wrap py-1 md:py-2">
                {items.map((technology, j) => (
                  <span
                    key={`tech${j}`}
                    className="w-[clamp(100px,25vw,300px)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </li>
          ))}
          <Separator />
        </ul>
      </section>
      <section className="w-full space-y-5 uppercase">
        <p className="text-justify before:mr-3 before:italic before:text-muted-foreground before:content-['(Time?)'] md:before:mr-6">
          In my free time, I enjoy playing games, seeking a deeper understanding
          of life, reading blog posts, and watching YouTube videos.
        </p>
        <div className="group relative h-[clamp(112px,10vw,320px)] w-full saturate-[0.25]">
          <div className="absolute inset-0 z-40 grid place-content-center bg-background/50 opacity-0 transition-opacity group-hover:opacity-100">
            (Visage)
          </div>
          <Image
            className="object-cover"
            src="/visage.jpg"
            alt="Screenshot from game Visage"
            priority
            fill
          />
        </div>
      </section>
      <section className="w-full space-y-5 uppercase">
        <Separator />
        <div className="flex w-full overflow-hidden text-base uppercase md:text-2xl">
          <Marquee
            quantity={6}
            nodes={
              <>
                <p className="ml-5">Lets work together</p>
                <p>Hit me up</p>
                <a
                  href={email}
                  className="text-primary underline underline-offset-2"
                >
                  yuxipersonal@gmail.com
                </a>
              </>
            }
          />
        </div>
        <Separator />
      </section>
      <footer className="mb-20 flex w-full flex-wrap items-center justify-center gap-2 text-center text-sm sm:justify-between [&_p]:uppercase">
        <p>Yuri Candido da Silva—{new Date().getFullYear()}</p>
        <a className="underline underline-offset-2" href={email}>
          yuxipersonal@gmail.com
        </a>
        <p>Today, not tomorrow</p>
      </footer>
    </section>
  );
};

export default page;
