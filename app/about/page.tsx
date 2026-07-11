import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — Own A Plot",
  description:
    "The people, the process, and the quiet philosophy behind Own A Plot.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 md:pt-48">
        <div className="container-page">
          <p className="eyebrow animate-fadeIn">Our Approach</p>
          <h1 className="mt-6 max-w-4xl animate-fadeUp font-serif text-h1 leading-[1.05]">
            A quieter, more considered way of owning land.
          </h1>
          <p className="prose-max mt-8 animate-fadeUp text-body text-muted [animation-delay:120ms]">
            Own A Plot is a small team of planners, agronomists, and lawyers
            who curate managed land ventures for people who want to own the
            future — slowly, thoughtfully, and on their own terms.
          </p>
        </div>
      </section>

      {/* Split editorial */}
      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div
            data-reveal
            className="relative aspect-[4/5] w-full overflow-hidden lg:col-span-6"
          >
            <Image
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1800&auto=format&fit=crop"
              alt="Old trees on the boundary of a field"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div data-reveal className="lg:col-span-6 lg:pt-20">
            <p className="eyebrow">Why We Do This</p>
            <h2 className="mt-6 font-serif text-h2">
              Because land, done well, is the most patient investment there is.
            </h2>
            <div className="prose-max mt-10 space-y-6 text-body text-muted">
              <p>
                We began Own A Plot after a decade of watching the land
                business grow crowded and loud. Too many logos. Too many
                promises. Not enough people who had actually walked the ground
                they were selling.
              </p>
              <p>
                So we set a rule for ourselves. We would only ever open a
                venture that a member of our own family would want to hold. We
                would talk about it plainly. We would draw it carefully. And
                we would keep the number small.
              </p>
              <p>
                Everything else follows from that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-y border-t border-charcoal/10">
        <div className="container-page">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow">Principles</p>
            <h2 className="mt-6 font-serif text-h2">The four we live by.</h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
            {[
              {
                n: "01",
                title: "Walk the land, first.",
                body: "No parcel enters the collection without at least three visits, in three seasons, by two members of the team.",
              },
              {
                n: "02",
                title: "Draw with the land, not against it.",
                body: "Roads follow contours. Trees stay where they are. Plots face the sky the land already had.",
              },
              {
                n: "03",
                title: "Talk plainly, always.",
                body: "The paperwork you sign says what it means. The brochure shows what you will see. No small print.",
              },
              {
                n: "04",
                title: "Keep the number small.",
                body: "We open only a handful of ventures each year. It is the only way to hold to the first three principles.",
              },
            ].map((p) => (
              <div key={p.n} data-reveal className="group">
                <p className="font-serif text-h2 text-charcoal/20">{p.n}</p>
                <h3 className="mt-6 font-serif text-h3">{p.title}</h3>
                <p className="prose-max mt-6 text-body text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team quote / CTA */}
      <section className="section-y border-t border-charcoal/10">
        <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <blockquote className="font-serif text-h2 leading-[1.25]">
              &ldquo;A good piece of land does not ask to be sold. It asks to
              be understood, and then, quietly, to be kept.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.24em] text-muted">
              — Founder&rsquo;s Note
            </p>

            <Link href="/ventures" className="btn-luxury mt-12 group">
              See the Collection
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div
            data-reveal
            className="relative aspect-[4/5] w-full overflow-hidden lg:col-span-5"
          >
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1600&auto=format&fit=crop"
              alt="A slow curve of road under the trees"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
