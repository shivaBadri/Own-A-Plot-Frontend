import EnquiryForm from "@/components/EnquiryForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact — Own A Plot",
  description:
    "Speak with a member of the Own A Plot team. A quiet call, at your pace.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 md:pt-48">
        <div className="container-page">
          <p className="eyebrow animate-fadeIn">Contact</p>
          <h1 className="mt-6 max-w-3xl animate-fadeUp font-serif text-h1 leading-[1.05]">
            Begin a quiet conversation.
          </h1>
          <p className="prose-max mt-8 animate-fadeUp text-body text-muted [animation-delay:120ms]">
            Share a few details and a member of the team will call you back
            within one working day.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div data-reveal className="lg:col-span-5">
            <p className="eyebrow">Reach Us Directly</p>
            <ul className="mt-10 space-y-8">
              <li className="flex items-start gap-5">
                <Phone size={18} strokeWidth={1.2} className="mt-1 shrink-0" />
                <div>
                  <p className="eyebrow">Phone</p>
                  <a
                    href="tel:+919999999999"
                    className="link-underline mt-2 block font-serif text-h4"
                  >
                    +91 99999 99999
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    Mon – Sat, 10am – 7pm
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <Mail size={18} strokeWidth={1.2} className="mt-1 shrink-0" />
                <div>
                  <p className="eyebrow">Email</p>
                  <a
                    href="mailto:hello@ownaplot.com"
                    className="link-underline mt-2 block font-serif text-h4"
                  >
                    hello@ownaplot.com
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    We reply within a working day.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <MapPin size={18} strokeWidth={1.2} className="mt-1 shrink-0" />
                <div>
                  <p className="eyebrow">Studio</p>
                  <p className="mt-2 font-serif text-h4">Own A Plot Studio</p>
                  <p className="mt-1 text-body text-muted">
                    6th Floor, Jubilee Hills
                    <br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-16 border-t border-charcoal/10 pt-8">
              <p className="eyebrow">A Note on Visits</p>
              <p className="prose-max mt-4 text-body text-muted">
                Visits to our ventures are private, unhurried, and only ever
                by appointment. We prefer it that way — and, we suspect, so
                will you.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
