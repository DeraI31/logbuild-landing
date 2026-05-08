"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const tiers = [
  {
    name: "Solo",
    tagline: "Perfect for small builders",
    gbp: { monthly: "£99", setup: "£500 one-time setup" },
    usd: { monthly: "$129", setup: "$639 one-time setup" },
    cta: "Get started",
    highlighted: false,
    features: [
      { text: "Site report automation", available: true },
      { text: "Google or Microsoft integration", available: true },
      { text: "Report log spreadsheet", available: true },
      { text: "Email delivery to PM", available: true },
      { text: "1 active site", available: true },
      { text: "Email support", available: true },
    ],
  },
  {
    name: "Starter",
    tagline: "For growing contractors",
    gbp: { monthly: "£249", setup: "£500 one-time setup" },
    usd: { monthly: "$319", setup: "$639 one-time setup" },
    cta: "Get started",
    highlighted: false,
    features: [
      { text: "Everything in Solo", available: true },
      { text: "Up to 3 active sites", available: true },
      { text: "Branded report header", available: true },
      { text: "Priority email support", available: true },
    ],
  },
  {
    name: "Professional",
    tagline: "For mid-size firms",
    gbp: { monthly: "£449", setup: "£500 one-time setup" },
    usd: { monthly: "$569", setup: "$639 one-time setup" },
    cta: "Get started",
    highlighted: true,
    features: [
      { text: "Everything in Starter", available: true },
      { text: "AI defect photo analysis", available: true, soon: true },
      { text: "Auto-assignment to trades", available: true, soon: true },
      { text: "Priority issue flagging", available: true },
      { text: "Up to 10 active sites", available: true },
      { text: "Dedicated onboarding call", available: true },
    ],
  },
  {
    name: "Enterprise",
    tagline: "For national contractors",
    gbp: { monthly: "£749", setup: "Custom setup" },
    usd: { monthly: "$949", setup: "Custom setup" },
    cta: "Contact us",
    highlighted: false,
    features: [
      { text: "Everything in Professional", available: true },
      { text: "Multi-site dashboard", available: true },
      { text: "Branded report templates", available: true },
      { text: "WhatsApp voice note input", available: true },
      { text: "Unlimited sites", available: true },
      { text: "Dedicated account manager", available: true },
      { text: "Custom integrations", available: true },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [currency, setCurrency] = useState<"gbp" | "usd">("gbp");

  return (
    <section id="pricing" ref={ref} className="bg-brand-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text tracking-tight">
            Transparent pricing. No surprises.
          </h2>
          <p className="mt-4 text-brand-text-muted max-w-[46ch]">
            All plans include a one-off setup fee that covers integration,
            configuration and onboarding. Cancel anytime.
          </p>
        </motion.div>

        {/* Currency toggle */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="flex items-center justify-center mb-10"
        >
          <button
            onClick={() => setCurrency("gbp")}
            className={`font-heading text-xs tracking-wider px-4 py-2 rounded-l-full border transition-all duration-200 cursor-pointer ${
              currency === "gbp"
                ? "bg-brand-green text-brand-white border-brand-green"
                : "bg-transparent text-brand-text-muted border-brand-green/20 hover:border-brand-green/40"
            }`}
          >
            £ GBP
          </button>
          <button
            onClick={() => setCurrency("usd")}
            className={`font-heading text-xs tracking-wider px-4 py-2 rounded-r-full border-t border-b border-r transition-all duration-200 cursor-pointer ${
              currency === "usd"
                ? "bg-brand-green text-brand-white border-brand-green"
                : "bg-transparent text-brand-text-muted border-brand-green/20 hover:border-brand-green/40"
            }`}
          >
            $ USD
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map(({ name, tagline, gbp, usd, cta, highlighted, features }, i) => {
            const prices = currency === "gbp" ? gbp : usd;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.08,
                  ease,
                }}
                className={`rounded-xl flex flex-col transition-all duration-300 ${
                  highlighted
                    ? "bg-brand-green text-brand-white shadow-[0_32px_80px_rgba(45,74,30,0.45),0_0_0_1px_rgba(124,179,66,0.2)] relative overflow-hidden scale-[1.02]"
                    : "bg-brand-surface border border-brand-green/8 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,74,30,0.1)]"
                }`}
              >
                {highlighted && (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(124,179,66,0.12),transparent)] pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 flex justify-center pointer-events-none">
                      <span className="font-heading text-[9px] tracking-widest uppercase px-3 py-1 bg-brand-lime text-brand-green-dark rounded-b-md">
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                <div className={`p-6 pb-4 relative ${highlighted ? "pt-8" : ""}`}>
                  <p
                    className={`font-heading text-xs tracking-widest uppercase mb-1 ${
                      highlighted ? "text-brand-lime" : "text-brand-text-muted"
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`text-xs mb-4 ${
                      highlighted ? "text-brand-white/50" : "text-brand-text-muted/70"
                    }`}
                  >
                    {tagline}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span
                      className={`font-heading text-3xl tracking-tight ${
                        highlighted ? "text-brand-white" : "text-brand-text"
                      }`}
                    >
                      {prices.monthly}
                    </span>
                    <span
                      className={`text-sm mb-1 ${
                        highlighted ? "text-brand-white/50" : "text-brand-text-muted"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={`text-xs ${
                      highlighted ? "text-brand-white/40" : "text-brand-text-muted/60"
                    }`}
                  >
                    + {prices.setup}
                  </p>
                </div>

                <div
                  className={`mx-6 border-t ${
                    highlighted ? "border-brand-white/10" : "border-brand-green/8"
                  }`}
                />

                <ul className="p-6 space-y-2.5 flex-1 relative">
                  {features.map(({ text, available, soon }) => (
                    <li key={text} className="flex items-start gap-2.5">
                      <span
                        className={`shrink-0 mt-0.5 ${
                          available
                            ? "text-brand-lime"
                            : highlighted
                            ? "text-brand-white/20"
                            : "text-brand-green/20"
                        }`}
                      >
                        {available ? <CheckIcon /> : <MinusIcon />}
                      </span>
                      <span
                        className={`text-xs leading-snug flex items-center gap-2 ${
                          available
                            ? highlighted
                              ? "text-brand-white/85"
                              : "text-brand-text"
                            : highlighted
                            ? "text-brand-white/25"
                            : "text-brand-text-muted/40"
                        }`}
                      >
                        {text}
                        {soon && (
                          <span className="inline-flex items-center font-heading text-[9px] tracking-wider px-1.5 py-0.5 rounded bg-brand-lime/20 text-brand-lime border border-brand-lime/30 uppercase shrink-0">
                            Soon
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="px-6 pb-6 relative">
                  <Link
                    href="/enquiry"
                    className={`block w-full text-center font-heading text-xs tracking-wider py-3 rounded transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                      highlighted
                        ? "bg-brand-lime text-brand-green-dark font-bold hover:bg-brand-lime-hover shadow-[0_4px_20px_rgba(124,179,66,0.35)] hover:shadow-[0_8px_32px_rgba(124,179,66,0.55)]"
                        : "bg-brand-green/10 text-brand-green hover:bg-brand-green/15 border border-brand-green/15 hover:-translate-y-0.5"
                    }`}
                  >
                    {cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-8 space-y-1"
        >
          <p className="text-sm text-brand-text font-heading tracking-wide">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-xs text-brand-text-muted/60">
            All prices exclude VAT. Setup fee covers integration, configuration and onboarding session.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M2.5 7.5l3.5 3.5 6.5-6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M3.5 7.5h8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
