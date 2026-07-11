import Link from "next/link";
import { ventures } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-loam text-cream">
      <div className="container-page grid grid-cols-1 gap-16 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-h3 leading-tight">Own A Plot</p>
          <p className="prose-max mt-6 text-body text-cream/70">
            Thoughtfully planned land ventures — a quieter, more considered
            way to own the future.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="block h-px w-12 bg-cream/40" />
            <p className="text-[11px] uppercase tracking-[0.32em] text-cream/60">
              Est. In the Country
            </p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-cream/60">
            Ventures
          </p>
          <ul className="space-y-3 text-sm">
            {ventures.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/ventures/${v.slug}`}
                  className="link-underline text-cream"
                >
                  {v.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/ventures" className="link-underline text-cream">
                All Ventures
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-cream/60">
            Company
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/about" className="link-underline text-cream">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline text-cream">
                Contact
              </Link>
            </li>
            <li>
              <a
                href="mailto:hello@ownaplot.com"
                className="link-underline text-cream"
              >
                hello@ownaplot.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919999999999"
                className="link-underline text-cream"
              >
                +91 99999 99999
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-[0.22em] text-cream/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Own A Plot. All rights reserved.</p>
          <p>Curated with intention.</p>
        </div>
      </div>
    </footer>
  );
}
