import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, MapPin, ArrowRight } from "lucide-react";
import { getVenture, ventures } from "@/lib/data";
import EnquiryForm from "@/components/EnquiryForm";
import LocationAdvantages from "@/components/LocationAdvantages";

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return {};
  return {
    title: `${venture.name} — Own A Plot`,
    description: venture.tagline,
  };
}

export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();

  return (
    <>
      {/* ENTRANCE — HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <Image
          src={venture.heroImage}
          alt={venture.name}
          fill
          priority
          sizes="100vw"
          className="animate-slowZoom object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/70" />

        <div className="container-page relative flex h-full flex-col justify-end pb-20 md:pb-28">
          <div className="animate-fadeUp text-cream">
            <div className="flex items-center gap-4">
              <span className="block h-px w-12 bg-cream/60" />
              <p className="text-[11px] uppercase tracking-[0.32em] text-cream/85">
                Ventures / {venture.location}
              </p>
            </div>

            <h1 className="mt-8 max-w-4xl font-serif text-hero leading-[1.05]">
              {venture.name}
            </h1>
            <p className="mt-6 max-w-xl text-body text-cream/85">
              {venture.tagline}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-cream/20 pt-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                  Extent
                </p>
                <p className="mt-1 font-serif text-h4">
                  {venture.totalAcres} acres
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                  Region
                </p>
                <p className="mt-1 max-w-sm text-body">{venture.region}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cream/60">
                  Corridor
                </p>
                <p className="mt-1 font-serif text-h4">{venture.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + BROCHURE */}
      <section className="section-y bg-cream">
        <div className="container-page">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow">Orient Yourself</p>
            <h2 className="mt-6 font-serif text-h2">
              Find the land on the map. Take the layout with you.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Map left */}
            <div data-reveal className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden border border-charcoal/10">
                {venture.location_info.mapEmbed ? (
                  <iframe
                    src={venture.location_info.mapEmbed}
                    title={`${venture.name} location`}
                    className="absolute inset-0 h-full w-full grayscale-[0.35] transition-all duration-700 hover:grayscale-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-sand/40">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted">
                      Map available on private preview
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-start gap-3 text-sm text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <p>{venture.location_info.address}</p>
              </div>
            </div>

            {/* Brochure right */}
            <div data-reveal className="lg:col-span-5">
              <div className="flex h-full flex-col justify-between border border-charcoal/10 bg-sand/20 p-10">
                <div>
                  <p className="eyebrow">The Brochure</p>
                  <h3 className="mt-6 font-serif text-h3">
                    The full story, in paper form.
                  </h3>
                  <p className="prose-max mt-6 text-body text-muted">
                    A carefully printed brochure of {venture.name} — masterplan,
                    photography, and legal notes. Take it home, read it slowly.
                  </p>
                </div>

                <div className="mt-12 border-t border-charcoal/15 pt-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-serif text-lg">
                        {venture.brochure.fileName}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
                        PDF · {venture.brochure.fileSize}
                      </p>
                    </div>
                    <a
                      href={venture.brochure.url}
                      download
                      aria-label="Download brochure"
                      className="group flex h-14 w-14 shrink-0 items-center justify-center border border-charcoal transition-all duration-500 hover:bg-charcoal hover:text-cream"
                    >
                      <Download
                        size={18}
                        className="transition-transform duration-500 group-hover:translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS AREA — SPACIOUS IMAGES */}
      {venture.story.body.length > 0 && (
        <section className="section-y border-t border-charcoal/10 bg-cream">
          <div className="container-page">
            <div data-reveal className="max-w-2xl">
              <p className="eyebrow">{venture.story.eyebrow}</p>
              <h2 className="mt-6 font-serif text-h2">{venture.story.title}</h2>
              <div className="prose-max mt-10 space-y-6 text-body text-muted">
                {venture.story.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {venture.gallery.length > 1 && (
              <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-12">
                <div
                  data-reveal
                  className="relative aspect-[4/5] w-full overflow-hidden md:col-span-7"
                >
                  <Image
                    src={venture.gallery[0]}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-end gap-12 md:col-span-5 md:pb-12">
                  <div
                    data-reveal
                    className="relative aspect-[4/3] w-full overflow-hidden"
                  >
                    <Image
                      src={venture.gallery[1]}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div data-reveal>
                    <p className="eyebrow">A note from the site</p>
                    <p className="mt-4 font-serif text-h4 leading-snug">
                      &ldquo;There is a stillness on this land at seven in the
                      morning that no drone photograph will ever hold.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Amenities & Details grid */}
            {(venture.amenities.length > 0 || venture.details.length > 0) && (
              <div className="mt-32 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
                {venture.amenities.length > 0 && (
                  <div data-reveal className="lg:col-span-7">
                    <p className="eyebrow">Amenities</p>
                    <h3 className="mt-6 font-serif text-h3">
                      A quiet set of comforts, done properly.
                    </h3>
                    <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-charcoal/10 pt-8 sm:grid-cols-2">
                      {venture.amenities.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-3 text-body"
                        >
                          <span className="mt-3 block h-px w-4 bg-charcoal/40" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {venture.details.length > 0 && (
                  <div data-reveal className="lg:col-span-5">
                    <p className="eyebrow">The Layout, in Numbers</p>
                    <dl className="mt-10 divide-y divide-charcoal/10 border-y border-charcoal/10">
                      {venture.details.map((d) => (
                        <div
                          key={d.label}
                          className="flex items-baseline justify-between py-5"
                        >
                          <dt className="text-sm uppercase tracking-[0.22em] text-muted">
                            {d.label}
                          </dt>
                          <dd className="font-serif text-lg">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            )}

            {/* Landscape editorial rows */}
            {venture.landscape.length > 0 && (
              <div className="mt-32 space-y-24 md:space-y-32">
                {venture.landscape.map((row, idx) => (
                  <article
                    key={row.title}
                    data-reveal
                    className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24"
                  >
                    <div
                      className={`relative aspect-[4/5] w-full overflow-hidden lg:col-span-7 ${
                        idx % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={row.image}
                        alt={row.title}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`lg:col-span-5 ${
                        idx % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <p className="eyebrow">
                        {String(idx + 1).padStart(2, "0")} /{" "}
                        {String(venture.landscape.length).padStart(2, "0")}
                      </p>
                      <h3 className="mt-6 font-serif text-h3">{row.title}</h3>
                      <p className="prose-max mt-8 text-body text-muted">
                        {row.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Location Advantages — interactive image-swap on hover */}
            {venture.advantages.length > 0 && (
              <div data-reveal className="mt-32">
                <LocationAdvantages
                  advantages={venture.advantages}
                  accent={venture.accent}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* LOCATION */}
      <section className="section-y border-t border-charcoal/10 bg-cream">
        <div className="container-page">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow">Location</p>
            <h2 className="mt-6 font-serif text-h2">
              A quiet corner of a growing corridor.
            </h2>
            <p className="prose-max mt-6 text-body text-muted">
              {venture.location_info.address}
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div
              data-reveal
              className="relative aspect-[4/3] w-full overflow-hidden border border-charcoal/10 lg:col-span-7"
            >
              {venture.location_info.mapEmbed ? (
                <iframe
                  src={venture.location_info.mapEmbed}
                  title={`${venture.name} area map`}
                  className="absolute inset-0 h-full w-full grayscale-[0.4]"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-sand/40">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted">
                    Map on private preview
                  </p>
                </div>
              )}
            </div>

            <div data-reveal className="lg:col-span-5">
              <p className="eyebrow">Reachable From</p>
              <ul className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
                {venture.location_info.nearby.length > 0 ? (
                  venture.location_info.nearby.map((n) => (
                    <li
                      key={n.name}
                      className="flex items-baseline justify-between gap-6 py-5"
                    >
                      <span className="text-body">{n.name}</span>
                      <span className="whitespace-nowrap text-sm uppercase tracking-[0.22em] text-muted">
                        {n.distance}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="py-5 text-body text-muted">
                    Precise distances shared on private preview.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="section-y border-t border-charcoal/10 bg-cream">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow">Take the Next Step</p>
            <h2 className="mt-6 font-serif text-h2">
              A walk of the land, at your pace.
            </h2>
            <p className="prose-max mt-8 text-body text-muted">
              Share your details. We&rsquo;ll arrange a private visit at a time
              of your choosing, with no pressure and no hurry.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="rule" />
              <p className="eyebrow">
                We call back within one working day.
              </p>
            </div>

            <Link
              href="/ventures"
              className="link-underline mt-16 inline-block text-sm uppercase tracking-[0.22em]"
            >
              ← Back to all Ventures
            </Link>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm ventureName={venture.name} />
          </div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="border-t border-charcoal/10">
        <div className="container-page flex items-center justify-between py-10">
          <p className="text-sm uppercase tracking-[0.22em] text-muted">
            {venture.name}
          </p>
          <Link
            href="/ventures"
            className="link-underline flex items-center gap-2 text-sm uppercase tracking-[0.22em]"
          >
            Other Ventures
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
