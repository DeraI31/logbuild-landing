"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: <ReportIcon />,
    title: "Site report automation",
    desc: "Email your update in plain language. LogBuild extracts every required field and builds the report in seconds.",
    highlight: true,
  },
  {
    icon: <DefectIcon />,
    title: "AI defect photo analysis",
    desc: "Attach site photos and AI identifies, describes and categorises defects automatically.",
  },
  {
    icon: <AssignIcon />,
    title: "Auto-assignment to trades",
    desc: "Defects and actions are automatically assigned to the right trade contractor based on type and location.",
  },
  {
    icon: <TemplateIcon />,
    title: "Branded report templates",
    desc: "Every report carries your company logo, project details and formatting. Professional, consistent, yours.",
  },
  {
    icon: <SpreadsheetIcon />,
    title: "Report log spreadsheet",
    desc: "All reports are automatically logged to a Google Sheet or Excel workbook. Full audit trail from day one.",
  },
  {
    icon: <DashboardIcon />,
    title: "Multi-site dashboard",
    desc: "Monitor activity, defects and report status across every active project from a single view.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="features" ref={ref} className="bg-brand-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-text tracking-tight max-w-[20ch]">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </motion.div>

        {/* Hero feature (full-width) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-3 bg-brand-green rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12"
        >
          <div className="w-16 h-16 rounded-xl bg-brand-lime/15 border border-brand-lime/25 flex items-center justify-center shrink-0">
            <ReportIcon />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-xl text-brand-white tracking-tight mb-3">
              Site report automation
            </h3>
            <p className="text-brand-white/60 leading-relaxed max-w-[52ch] text-[15px]">
              Email your update in plain language. LogBuild extracts every
              required field — weather, workforce, progress, deliveries,
              visitors — and builds a professional PDF in under 30 seconds.
              Works from any phone or inbox.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center gap-1 shrink-0 min-w-[80px]">
            <p className="font-heading text-4xl text-brand-lime leading-none">30s</p>
            <p className="text-[11px] text-brand-white/35 tracking-wider uppercase mt-1">delivery</p>
          </div>
        </motion.div>

        {/* 4 supporting features in a 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {features.slice(1, 5).map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="bg-brand-white border border-brand-green/8 rounded-xl p-7"
            >
              <div className="w-11 h-11 mb-5 flex items-center justify-center rounded-lg bg-brand-surface shrink-0">
                {icon}
              </div>
              <h3 className="font-heading text-sm text-brand-text tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Full-width bottom feature: multi-site dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.52, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mt-3 bg-brand-white border border-brand-green/8 rounded-xl p-7 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-surface shrink-0">
            <DashboardIcon />
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-sm text-brand-text tracking-tight mb-2">
              Multi-site dashboard
            </h3>
            <p className="text-sm text-brand-text-muted leading-relaxed max-w-[60ch]">
              Monitor activity, defects and report status across every active project from a single view.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ReportIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function DefectIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function AssignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TemplateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function SpreadsheetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
