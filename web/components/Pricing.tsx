"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "£300",
    period: "/month",
    setup: "£1,500 setup",
    cta: "Get started",
    highlighted: false,
    features: [
      { text: "Site report automation", available: true },
      { text: "Google or Microsoft integration", available: true },
      { text: "Report log spreadsheet", available: true },
      { text: "Email delivery to PM", available: true },
      { text: "Up to 3 active sites", available: true },
      { text: "AI defect photo analysis", available: false },
      { text: "Auto-assignment to trades", available: false },
      { text: "Priority issue flagging", available: false },
    ],
  },
  {
    name: "Professional",
    price: "£500",
    period: "/month",
    setup: "£2,500 setup",
    cta: "Most popular",
    highlighted: true,
    features: [
      { text: "Everything in Starter", available: true },
      { text: "AI defect photo analysis", available: true, soon: true },
      { text: "Auto-assignment to trades", available: true, soon: true },
      { text: "Priority issue flagging", available: true },
      { text: "Up to 10 active sites", available: true },
      { text: "Multi-site dashboard", available: false },
      { text: "Branded report templates", available: false },
      { text: "WhatsApp voice notes", available: false },
    ],
  },
  {
    name: "Enterprise",
    price: "£800",
    period: "/month",
    setup: "£5,000 setup",
    cta: "Contact us",
    highlighted: false,
    features: [
      { text: "Everything in Professional", available: true },
      { text: "Multi-site dashboard", available: true },
      { text: "Branded report templates", available: true },
      { text: "WhatsApp voice notes", available: true },
      { text: "Unlimited sites", available: true },
      { text: "Dedicated account manager", available: true },
      { text: "Custom integrations", available: true },
      { text: "SLA support", available: true },
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="pricing" ref={ref} className="bg-brand-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
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

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map(({ name, price, period, setup, cta, highlighted, features }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className={`rounded-xl flex flex-col transition-all duration-300 ${
                highlighted
                  ? "bg-brand-green text-brand-white shadow-[0_32px_80px_rgba(45,74,30,0.45),0_0_0_1px_rgba(124,179,66,0.2)] relative overflow-hidden scale-[1.02]"
                  : "bg-brand-surface border border-brand-green/8 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,74,30,0.1)]"
              }`}
            >

              {highlighted && (
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(124,179,66,0.12),transparent)] pointer-events-none" />
              )}
              <div className="p-7 pb-5 relative">
                <p
                  className={`font-heading text-xs tracking-widest uppercase mb-4 ${
                    highlighted ? "text-brand-lime" : "text-brand-text-muted"
                  }`}
                >
                  {name}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`font-heading text-4xl tracking-tight ${
                      highlighted ? "text-brand-white" : "text-brand-text"
                    }`}
                  >
                    {price}
                  </span>
                  <span
                    className={`text-sm mb-1.5 ${
                      highlighted ? "text-brand-white/50" : "text-brand-text-muted"
                    }`}
                  >
                    {period}
                  </span>
                </div>
                <p
                  className={`text-xs ${
                    highlighted ? "text-brand-white/40" : "text-brand-text-muted/60"
                  }`}
                >
                  + {setup}
                </p>
              </div>

              <div
                className={`mx-7 border-t ${
                  highlighted ? "border-brand-white/10" : "border-brand-green/8"
                }`}
              />

              <ul className="p-7 space-y-3 flex-1 relative">
                {features.map(({ text, available, soon }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 mt-0.5 ${
                        available
                          ? highlighted
                            ? "text-brand-lime"
                            : "text-brand-lime"
                          : highlighted
                          ? "text-brand-white/20"
                          : "text-brand-green/20"
                      }`}
                    >
                      {available ? <CheckIcon /> : <MinusIcon />}
                    </span>
                    <span
                      className={`text-sm leading-snug flex items-center gap-2 ${
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

              <div className="px-7 pb-7 relative">
                <Link
                  href="/enquiry"
                  className={`block w-full text-center font-heading text-xs tracking-wider py-3.5 rounded transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                    highlighted
                      ? "bg-brand-lime text-brand-green-dark font-bold hover:bg-brand-lime-hover shadow-[0_4px_20px_rgba(124,179,66,0.35)] hover:shadow-[0_8px_32px_rgba(124,179,66,0.55)]"
                      : "bg-brand-green/10 text-brand-green hover:bg-brand-green/15 border border-brand-green/15 hover:-translate-y-0.5"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8 text-xs text-brand-text-muted/60"
        >
          All prices exclude VAT. Setup fee covers integration, configuration and onboarding session.
        </motion.p>
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
