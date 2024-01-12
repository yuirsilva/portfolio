import World from "@/components/about/World";
import Icons from "@/components/Icons";
import Roll from "@/components/Roll";
import { technologies } from "@/content/about-tech";

const page = ({}) => {
  return (
    <section className="container grid auto-cols-fr grid-flow-col justify-center gap-16 px-8 md:px-16">
      <div className="sticky top-5 row-auto mx-auto h-full max-h-[50dvh] w-full max-w-2xl">
        <World />
      </div>
      <div className="flex flex-col gap-10 text-2xl md:text-5xl">
        <p className="text-balance indent-8">
          I&#8217;m a <span className="text-primary">front-end developer</span>,
          dedicated to creating seamless, interactive web experiences that
          resonate with users. Focusing on the visual and interactive elements
          that make a website truly engaging.
        </p>
        <p className="text-balance indent-8">
          I specialize in crafting scalable, user-friendly websites from
          scratch, ensuring they align perfectly with the design vision. My
          focus is on creating dynamic and interactive elements, leveraging the
          power of JavaScript to bring web pages to life. I&apos;m also adept at
          handling micro animations and transitions, which add a layer of polish
          and sophistication to the user experience.
        </p>
        <div className="grid grid-cols-3 gap-y-6 font-mono text-sm uppercase">
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
        </div>
        <div className="flex items-end justify-between font-mono text-sm uppercase">
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
