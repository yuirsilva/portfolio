import Content from "@/components/about/Content";
import Icons from "@/components/Icons";
import Roll from "@/components/Roll";
import { technologies } from "@/content/about-tech";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = ({}) => {
  return (
    <section className="container flex flex-col justify-center gap-10 py-12">
      <Content />
      <section className="grid gap-y-6 font-mono text-sm uppercase [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] md:ml-auto md:w-[calc(50%-2.5rem)]">
        <p className="lines-pattern col-span-full w-full">
          Technologies I&apos;ve Worked With
        </p>
        {technologies.map((type, i) => (
          <div key={i}>
            {type.map((item, j) => (
              <p key={j}>{item}</p>
            ))}
          </div>
        ))}
        <div className="col-span-full flex items-end justify-between font-mono text-sm uppercase">
          <div className="space-y-4">
            <p className="text-muted-foreground">Contact me</p>
            <div className="space-y-1 *:block">
              <a href="mailto:yuxipersonal@gmail.com" className="group">
                <Roll text="Email" />
              </a>
              <a href="https://CHANGE_THIS" className="group">
                <Roll text="LinkedIn" />
              </a>
            </div>
          </div>
          <Icons.aboutIcon />
        </div>
      </section>
    </section>
  );
};

export default page;
