"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  "Writing the same daily update twice, on two different forms",
  "Chasing WhatsApp photos until 8pm to finish the report",
  "Formatting last week's template from scratch again",
  "A defect slips through — and shows up in a dispute six months later",
  "The PM asks for a report you already sent. In a slightly different format.",
  "Spending Sunday night catching up on the week's paperwork",
];

export default function Problem() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % painPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="bg-brand-surface py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-4">
              The Problem
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-text leading-tight tracking-tight">
              Site managers waste{" "}
              <span className="text-brand-green">45 minutes</span> every day
              writing reports.
            </h2>
            <p className="mt-6 text-lg text-brand-text-muted leading-relaxed max-w-[48ch]">
              It is not because they lack skill. It is because the tools they
              have were built for offices, not sites. Every day the same
              information gets typed, reformatted, and emailed again.
            </p>
          </motion.div>

          {/* Right: Cycling pain points */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:mt-12"
          >
            <p className="font-heading text-xs text-brand-text-muted/60 tracking-widest uppercase mb-6">
              Sound familiar?
            </p>

            <div className="relative h-44 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="absolute inset-0 text-xl md:text-2xl font-heading text-brand-text leading-snug tracking-tight"
                >
                  &ldquo;{painPoints[index]}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {painPoints.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index
                      ? "w-8 bg-brand-lime"
                      : "w-1.5 bg-brand-green/30 hover:bg-brand-green/50"
                  }`}
                  aria-label={`Pain point ${i + 1}`}
                />
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {[
                { num: "63%", desc: "of site managers say daily documentation is their biggest admin burden" },
                { num: "4.2 hrs", desc: "average weekly time lost to report writing that could be automated" },
              ].map(({ num, desc }) => (
                <div key={num} className="flex items-center gap-5 bg-brand-white border border-brand-green/10 rounded-xl px-6 py-4">
                  <p className="font-heading text-3xl text-brand-green shrink-0 w-24">{num}</p>
                  <div className="w-px h-8 bg-brand-green/10 shrink-0" />
                  <p className="text-sm text-brand-text-muted leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
