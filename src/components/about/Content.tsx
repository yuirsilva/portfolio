import World from "@/components/about/World";

const Content = () => {
  return (
    <div className="flex flex-col gap-20 *:flex *:flex-col *:items-center *:justify-center md:gap-40">
      <section className="relative h-[70dvh] text-center uppercase">
        <div className="absolute inset-0 left-1/2 top-1/2 z-10 aspect-square w-3/6 max-w-md -translate-x-1/2 -translate-y-1/2">
          <World />
        </div>
        <h1 className="relative z-20 text-[clamp(32px,16vw,128px)] leading-none">
          Yuri Silva
        </h1>
        <p className="relative z-20">
          <span className="italic">(</span>Creative Developer
          <span className="italic">)</span>
        </p>
      </section>
      <section className="gap-5 text-justify text-2xl md:text-4xl xl:text-5xl">
        <h1 className="before:mr-3 before:text-base before:italic before:text-muted-foreground before:content-['(about_me)'] md:before:mr-6">
          I&apos;m <span className="text-primary">creative developer</span>{" "}
          based in Brazil, dedicated to creating seamless and interactive web
          experiences that resonate with users. Focusing on the visual and
          interactive elements that make a website truly engaging.
        </h1>
        <h1 className="indent-3 md:indent-6">
          My goal is to focus on being creative, which is the aspect of the
          field that I am particularly fond of. The concept of merging design
          and code is what truly captivates me.
        </h1>
      </section>
    </div>
  );
};

export default Content;
