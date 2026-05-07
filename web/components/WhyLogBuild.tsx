"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: <NoSoftwareIcon />,
    title: "No new software",
    desc: "Your team uses email. LogBuild plugs into what they already have. No logins to manage, no apps to install, no training sessions to run.",
  },
  {
    icon: <ZeroTrainingIcon />,
    title: "Zero training required",
    desc: "If you can send an email, you can use LogBuild. Write your update however you like. The AI handles the structure.",
  },
  {
    icon: <UKBuiltIcon />,
    title: "Built for UK construction",
    desc: "Reports align with BRE standards and CDM 2015 requirements. Designed with principal contractors and site managers from day one.",
  },
  {
    icon: <AuditIcon />,
    title: "Complete audit trail",
    desc: "Every report is timestamped, logged and stored. When disputes arise, you have a complete, verifiable record from the first day on site.",
  },
];

export default function WhyLogBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-brand-green py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-14"
        >
          <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-3">
            Why LogBuild
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-white tracking-tight max-w-[22ch]">
            Designed for the way sites actually work.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="flex gap-5 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lime/10 border border-brand-lime/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-lime/20 group-hover:border-brand-lime/40 group-hover:scale-110 transition-all duration-250">
                {icon}
              </div>
              <div>
                <h3 className="font-heading text-base text-brand-white tracking-tight mb-2 group-hover:text-brand-lime transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sm text-brand-white/55 leading-relaxed group-hover:text-brand-white/70 transition-colors duration-200">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UK badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-brand-lime/10 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <UKFlagIcon />
            <p className="font-heading text-xs text-brand-white/50 tracking-wider">Registered in England &amp; Wales</p>
          </div>
          <div className="h-4 w-px bg-brand-white/10 hidden sm:block" />
          <p className="font-heading text-xs text-brand-white/50 tracking-wider">CDM 2015 aware</p>
          <div className="h-4 w-px bg-brand-white/10 hidden sm:block" />
          <p className="font-heading text-xs text-brand-white/50 tracking-wider">BRE aligned reporting</p>
          <div className="h-4 w-px bg-brand-white/10 hidden sm:block" />
          <p className="font-heading text-xs text-brand-white/50 tracking-wider">GDPR compliant</p>
        </motion.div>
      </div>
    </section>
  );
}

function NoSoftwareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function ZeroTrainingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function UKBuiltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function AuditIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UKFlagIcon() {
  return (
    <svg width="20" height="14" viewBox="0 0 60 40" fill="none">
      <rect width="60" height="40" rx="3" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="white" strokeWidth="7" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4.5" />
      <path d="M30 0V40M0 20H60" stroke="white" strokeWidth="12" />
      <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="7.5" />
    </svg>
  );
}
