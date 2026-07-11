"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  ventureName?: string;
  compact?: boolean;
};

export default function EnquiryForm({
  ventureName,
  compact = false,
}: Props) {
  const [state, setState] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sent");
  };

  if (state === "sent") {
    return (
      <div
        data-reveal
        className="border border-charcoal/10 bg-cream p-10 text-charcoal md:p-14"
      >
        <p className="eyebrow">Thank you</p>
        <h3 className="mt-4 font-serif text-h3">
          We&rsquo;ll be in touch, quietly and soon.
        </h3>
        <p className="prose-max mt-6 text-body text-muted">
          A member of the Own A Plot team will call you within one working day
          to arrange a private walk of the land.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`border border-charcoal/10 bg-cream ${
        compact ? "p-8" : "p-10 md:p-14"
      }`}
      data-reveal
    >
      <p className="eyebrow">Private Enquiry</p>
      <h3 className="mt-3 font-serif text-h3">
        Request a Callback
      </h3>
      <p className="prose-max mt-4 text-body text-muted">
        Share a few details and a member of the team will call to arrange a
        visit. No sales pressure — just a quiet conversation.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            required
            type="text"
            name="name"
            placeholder="Your full name"
            className="input-luxury mt-2"
          />
        </label>
        <label className="block">
          <span className="eyebrow">Mobile</span>
          <input
            required
            type="tel"
            name="mobile"
            placeholder="+91"
            className="input-luxury mt-2"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="eyebrow">Interest</span>
          <input
            type="text"
            name="interest"
            placeholder={ventureName ?? "The venture you have in mind"}
            className="input-luxury mt-2"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="eyebrow">Message</span>
          <textarea
            name="message"
            rows={3}
            placeholder="Anything you'd like us to know before we call"
            className="input-luxury mt-2 resize-none"
          />
        </label>
      </div>

      <button type="submit" className="btn-luxury mt-10 group">
        Request Callback
        <ArrowRight
          size={16}
          className="transition-transform duration-500 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
