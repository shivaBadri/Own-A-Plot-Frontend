import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Sprout,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { ventures } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2600&auto=format&fit=crop"
          alt="Sunrise over an open field"
          fill
          priority
          sizes="100vw"
          className="animate-slowZoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/55" />

        <div className="container-page relative flex h-full flex-col items-center justify-center pt-[18vh] text-center">
          <div className="animate-fadeUp text-cream">
            <h1 className="font-serif text-hero leading-none tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
              Own A Plot
            </h1>

            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link href="/ventures" className="btn-hero-primary group">
                Explore Ventures
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
              <Link href="/contact" className="btn-hero-secondary group">
                Contact
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — editorial split */}
      <section className="section-y bg-cream">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div
            data-reveal
            className="relative aspect-[4/5] w-full overflow-hidden lg:col-span-6"
          >
            <Image
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1800&auto=format&fit=crop"
              alt="A dirt road curving through open land, morning light"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div data-reveal className="lg:col-span-6 lg:pt-24">
            <p className="eyebrow">About Own A Plot</p>
            <h2 className="mt-6 font-serif text-h2">
              We make land ownership simple, transparent, and meaningful.
            </h2>
            <div className="mt-10 flex items-center gap-4">
              <span className="rule" />
            </div>
            <div className="prose-max mt-10 space-y-6 text-body text-muted">
              <p>
                Own A Plot is a small, careful company that curates managed
                land ventures. Every venture we open is one we would put our
                own family on.
              </p>
              <p>
                We spend a long time on each parcel — walking it, listening
                to it, drawing and re-drawing — until the land tells us how
                it wants to be lived on. Then, we open it, quietly.
              </p>
              <p>
                The result: not a marketplace, but a small library of places
                that will grow more valuable, more beautiful, and more useful
                over time.
              </p>
            </div>

            <Link href="/about" className="btn-luxury mt-12 group">
              Our Approach
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED VENTURES */}
      <section className="section-y border-t border-charcoal/10 bg-cream">
        <div className="container-page">
          <div
            data-reveal
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <div className="max-w-xl">
              <p className="eyebrow">Featured Ventures</p>
              <h2 className="mt-6 font-serif text-h2">
                A small library of places, held with intention.
              </h2>
            </div>
            <Link
              href="/ventures"
              className="link-underline text-sm uppercase tracking-[0.22em]"
            >
              View All Ventures →
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {ventures.map((v, idx) => {
              const isOpen = idx === 0;
              return (
                <Link
                  key={v.slug}
                  href={`/ventures/${v.slug}`}
                  data-reveal
                  className={`group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-charcoal ${
                    idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={v.heroImage}
                      alt={v.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute left-6 top-6 flex items-center gap-2 border border-cream/60 bg-black/25 px-3 py-1.5 backdrop-blur-sm">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isOpen ? "bg-olive" : "bg-cream/70"
                        }`}
                      />
                      <p className="text-[10px] uppercase tracking-[0.28em] text-cream">
                        {isOpen ? "Now open" : "Coming soon"}
                      </p>
                    </div>

                    <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-cream">
                      <h3 className="font-serif text-h3 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                        {v.name}
                      </h3>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-cream/80 bg-black/25 backdrop-blur-sm transition-all duration-500 group-hover:bg-cream group-hover:text-charcoal">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.22em] text-charcoal/80">
                      {v.location}
                    </p>
                    <span className="link-underline text-[11px] uppercase tracking-[0.28em] text-charcoal">
                      View Venture
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-charcoal/15 pt-6 text-sm text-charcoal/85">
                    <span className="font-serif text-lg">
                      {v.totalAcres}
                      <span className="ml-1 text-xs uppercase tracking-[0.22em] text-muted">
                        acres
                      </span>
                    </span>
                    <span className="h-1 w-1 rounded-full bg-charcoal/30" />
                    <span
                      className={`text-xs uppercase tracking-[0.22em] ${
                        isOpen ? "text-olive" : "text-muted"
                      }`}
                    >
                      {isOpen ? "Enquire" : "Preview"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-y border-t border-charcoal/10 bg-cream">
        <div className="container-page">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow">Why Own A Plot</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Verified Ventures",
                body: "Every parcel is independently walked, verified, and legally reviewed before it is opened.",
                fill: "hover:bg-olive/10",
                iconHover: "group-hover:text-olive",
                titleHover: "group-hover:text-olive",
              },
              {
                icon: FileText,
                title: "Clear Documentation",
                body: "Single-owner titles, DTCP approvals, and a straight, transparent path to your name on paper.",
                fill: "hover:bg-sand/40",
                iconHover: "group-hover:text-bark",
                titleHover: "group-hover:text-bark",
              },
              {
                icon: Sprout,
                title: "Growing Locations",
                body: "We choose corridors that are quietly improving — not markets that are already loud.",
                fill: "hover:bg-earth/20",
                iconHover: "group-hover:text-earth",
                titleHover: "group-hover:text-earth",
              },
              {
                icon: MessageCircle,
                title: "Easy Enquiry",
                body: "A small team, a quiet call, and a walk of the land with no pressure — that is the process.",
                fill: "hover:bg-bark/10",
                iconHover: "group-hover:text-bark",
                titleHover: "group-hover:text-bark",
              },
            ].map(({ icon: Icon, title, body, fill, iconHover, titleHover }) => (
              <div
                key={title}
                data-reveal
                className={`group border border-charcoal/10 p-10 transition-colors duration-700 ${fill}`}
              >
                <Icon
                  size={40}
                  strokeWidth={1}
                  className={`text-muted/70 transition-colors duration-700 ${iconHover}`}
                />
                <h3
                  className={`mt-8 font-serif text-h4 transition-colors duration-700 ${titleHover}`}
                >
                  {title}
                </h3>
                <p className="mt-4 text-body text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="section-y border-t border-charcoal/10 bg-cream">
        <div className="container-page grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <p className="eyebrow">In Closing</p>
            <blockquote className="mt-8 font-serif text-h2 leading-[1.25]">
              &ldquo;Land does not appreciate on a graph. It appreciates in
              the way you feel when you stand on it, twenty years from
              now.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.24em] text-muted">
              — Founder&rsquo;s Note
            </p>
          </div>

          <div
            data-reveal
            className="relative aspect-[4/5] w-full overflow-hidden lg:col-span-5"
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
              alt="Trees at first light"
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
