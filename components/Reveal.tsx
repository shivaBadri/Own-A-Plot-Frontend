"use client";

import { useEffect } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    els.forEach((el) => {
      el.classList.add("reveal");
      obs.observe(el);
    });

    return () => obs.disconnect();
  });

  return <>{children}</>;
}
