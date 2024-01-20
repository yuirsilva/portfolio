import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

const FourOhFour = () => {
  return (
    <section className="grid place-content-center gap-2 text-center uppercase">
      <h1>Page not Found</h1>
      <Link href="/" className="underline underline-offset-2">
        Go back
      </Link>
    </section>
  );
};

export default FourOhFour;
