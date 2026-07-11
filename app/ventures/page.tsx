import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ventures } from "@/lib/data";

export const metadata = {
  title: "Ventures — Own A Plot",
  description:
    "A curated collection of managed land ventures — each drawn with care, opened quietly.",
};

const locations = Array.from(new Set(ventures.map((v) => v.location)));

export default function VenturesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 md:pt-48">
        <div className="container-page">
          <p className="eyebrow animate-fadeIn">The Collection</p>
          <h1 className="mt-6 max-w-3xl animate-fadeUp font-serif text-h1 leading-[1.05]">
            A small library of places, held with intention.
          </h1>
          <p className="prose-max mt-8 animate-fadeUp text-body text-muted [animation-delay:120ms]">
            We open only a handful of ventures each year. Each is walked,
            reviewed, and drawn until the land settles into its own quiet
            proportion.
          </p>
        </div>
      </section>

      {/* Filters (visual — non-functional) */}
      <section className="mt-20 border-y border-charcoal/10">
        <div className="container-page">
          <div className="grid grid-cols-1 divide-y divide-charcoal/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex items-center justify-between py-6 md:pr-8">
              <span className="eyebrow">Filter</span>
              <span className="text-xs uppercase tracking-[0.24em] text-muted">
                {ventures.length} Places
              </span>
            </div>
            <label className="group flex items-center gap-4 py-6 md:px-8">
              <span className="eyebrow whitespace-nowrap">Location</span>
              <select
                className="flex-1 border-0 bg-transparent text-sm uppercase tracking-[0.18em] text-charcoal focus:outline-none"
                defaultValue=""
              >
                <option value="">All corridors</option>
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </label>
            <label className="group flex items-center gap-4 py-6 md:pl-8">
              <span className="eyebrow whitespace-nowrap">Budget</span>
              <select
                className="flex-1 border-0 bg-transparent text-sm uppercase tracking-[0.18em] text-charcoal focus:outline-none"
                defaultValue=""
              >
                <option value="">On enquiry</option>
                <option>Entry</option>
                <option>Mid</option>
                <option>Premium</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      {/* Editorial listing */}
      <section className="section-y">
        <div className="container-page space-y-32 md:space-y-40">
          {ventures.map((v, idx) => {
            const reverse = idx % 2 === 1;
            const isOpen = idx === 0;
            const accentBar: Record<
              "olive" | "earth" | "bark",
              string
            > = {
              olive: "bg-olive",
              earth: "bg-earth",
              bark: "bg-bark",
            };
            const accentText: Record<
              "olive" | "earth" | "bark",
              string
            > = {
              olive: "text-olive",
              earth: "text-earth",
              bark: "text-bark",
            };
            return (
              <article
                key={v.slug}
                data-reveal
                className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24"
              >
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={v.heroImage}
                    alt={v.name}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`absolute left-0 top-0 h-1 w-24 ${accentBar[v.accent]}`}
                    aria-hidden
                  />
                </div>

                <div
                  className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isOpen ? "bg-olive" : "bg-charcoal/40"
                      }`}
                    />
                    <p className="eyebrow">
                      {isOpen ? "Now open" : "Coming soon"}
                    </p>
                  </div>
                  <h2 className="mt-6 font-serif text-h2">{v.name}</h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-charcoal/70">
                    {v.location}
                  </p>

                  <p className="prose-max mt-10 text-body text-muted">
                    {v.tagline}
                  </p>

                  <div className="mt-12 grid grid-cols-2 gap-8 border-t border-charcoal/15 pt-8">
                    <div>
                      <p className="eyebrow">Extent</p>
                      <p className="mt-2 font-serif text-h4">
                        {v.totalAcres}
                        <span className="ml-1 text-sm text-muted">acres</span>
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow">Status</p>
                      <p
                        className={`mt-2 font-serif text-h4 ${
                          isOpen ? accentText[v.accent] : "text-muted"
                        }`}
                      >
                        {isOpen ? "Open" : "Preview"}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/ventures/${v.slug}`}
                    className="btn-luxury mt-12 group"
                  >
                    View Venture
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
