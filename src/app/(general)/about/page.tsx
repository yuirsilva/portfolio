import Content from "@/components/about/Content";
import Icons from "@/components/Icons";
import Roll from "@/components/Roll";
import { technologies } from "@/content/about-tech";

const page = ({}) => {
  return (
    <section className="container col-auto grid justify-center gap-10 py-12 [grid-template-columns:repeat(auto-fill,minmax(50%,1fr))] md:gap-x-16 md:gap-y-10">
      <Content />
      <div className="col-start-1 grid gap-y-6 font-mono text-sm uppercase [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] md:col-start-2">
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
      </div>
    </section>
  );
};

export default page;
