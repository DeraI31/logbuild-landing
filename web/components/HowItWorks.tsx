"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    icon: <EmailIcon />,
    title: "Send your update",
    desc: "Email your site update from any device. No format required. Write it the same way you'd message your PM.",
  },
  {
    num: "02",
    icon: <AIIcon />,
    title: "AI formats the report",
    desc: "LogBuild extracts weather, workforce, deliveries, defects and progress. It knows your site's context.",
  },
  {
    num: "03",
    icon: <DeliveryIcon />,
    title: "Report delivered in 30 seconds",
    desc: "A professional, branded PDF lands in your PM's inbox. Every report is logged automatically.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="bg-brand-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text tracking-tight">
            Three steps. Zero new software.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Dashed connector — spans between the right edge of circle 1 and left edge of circle 3.
               Each column centre is at ~1/6 of the width; circles are w-20 (80px), radius = 40px. */}
          <div
            className="hidden md:block absolute h-px"
            style={{
              top: "40px",
              left: "calc(100% / 6 + 40px)",
              right: "calc(100% / 6 + 40px)",
              background: "repeating-linear-gradient(90deg,#2d4a1e 0,#2d4a1e 6px,transparent 6px,transparent 14px)",
              opacity: 0.2,
            }}
          />

          {steps.map(({ num, icon, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.12,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Number + icon circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-brand-green flex items-center justify-center shadow-[0_8px_24px_rgba(45,74,30,0.25)]">
                  {icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-lime flex items-center justify-center">
                  <span className="font-heading text-[10px] font-bold text-brand-green-dark leading-none">
                    {num}
                  </span>
                </span>
              </div>

              <h3 className="font-heading text-base text-brand-text tracking-tight mb-3">
                {title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed max-w-[28ch]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-brand-text-muted">
            Works with{" "}
            <span className="font-medium text-brand-text">Google Workspace</span>
            {" "}and{" "}
            <span className="font-medium text-brand-text">Microsoft 365.</span>
            {" "}No IT department needed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z" />
      <circle cx="9" cy="14" r="1" fill="#7cb342" />
      <circle cx="15" cy="14" r="1" fill="#7cb342" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
