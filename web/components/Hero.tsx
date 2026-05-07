"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease, delay },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-brand-green flex flex-col justify-center overflow-hidden pt-20">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#7cb342 1px, transparent 1px), linear-gradient(90deg, #7cb342 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-lime/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left: Content */}
          <div className="max-w-2xl">
            <motion.div {...fadeUp(0)} className="mb-10">
              <Image src="/Logbuild_logo_transparent.png" alt="LogBuild" width={915} height={202} className="h-32 w-auto" priority />
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading text-4xl md:text-5xl lg:text-[3.75rem] text-brand-white leading-[1.08] tracking-tight mb-7"
            >
              Site reports,
              <br />
              <span className="text-brand-lime">built automatically</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg md:text-xl text-brand-white/65 leading-relaxed max-w-[48ch] mb-10"
            >
              AI-powered daily reports for construction site managers.
              No apps. No training. Just email.
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2.5 font-heading text-sm tracking-wider px-7 py-4 border-2 border-brand-lime/60 text-brand-lime hover:border-brand-lime hover:bg-brand-lime/10 rounded transition-all duration-200 cursor-pointer"
              >
                <PlayIcon />
                Watch Demo
              </a>
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center font-heading text-sm tracking-wider px-7 py-4 bg-brand-lime text-brand-green-dark font-bold rounded hover:bg-brand-lime-hover transition-colors duration-200 cursor-pointer active:scale-[0.98]"
              >
                Book a Demo
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.45)}
              className="mt-14 flex items-center gap-10 border-t border-brand-white/10 pt-8"
            >
              {[
                { stat: "30s", label: "Report delivery" },
                { stat: "45 min", label: "Saved per day" },
                { stat: "CDM", label: "Compliant" },
              ].map(({ stat, label }, i) => (
                <div key={label} className={`flex items-center gap-10 ${i > 0 ? "border-l border-brand-white/10 pl-10" : ""}`}>
                  <div>
                    <p className="font-heading text-xl text-brand-lime">{stat}</p>
                    <p className="text-[11px] text-brand-white/40 mt-1 tracking-wider uppercase">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="hidden lg:block"
          >
            <ReportVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-surface to-transparent" />
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.5 2.5l10 5.5-10 5.5V2.5z" />
    </svg>
  );
}

function ReportVisual() {
  return (
    <div className="w-[340px] relative">
      <div className="bg-brand-green-dark border border-brand-lime/20 rounded-lg p-6 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="font-heading text-[10px] text-brand-lime/70 tracking-widest uppercase">Daily Site Report</p>
            <p className="font-heading text-sm text-brand-white mt-0.5">Block A — Level 3</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-brand-lime/20 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="space-y-3 mb-5">
          {[
            { label: "Work completed", value: "Blockwork courses 7–9" },
            { label: "Workforce on site", value: "14 operatives" },
            { label: "Weather", value: "Dry, 12°C" },
            { label: "Deliveries", value: "Mortar, 40 bags" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between gap-4">
              <span className="text-[11px] text-brand-white/40 shrink-0">{label}</span>
              <span className="text-[11px] text-brand-white/80 text-right">{value}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-lime/10 pt-4 flex items-center justify-between">
          <p className="text-[10px] text-brand-white/30">Generated in 28 seconds</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse" />
            <span className="text-[10px] text-brand-lime/70">Delivered</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-6 bg-brand-lime text-brand-green-dark rounded px-3 py-1.5 shadow-lg">
        <p className="font-heading text-[10px] tracking-wider">via email</p>
      </div>

      <div className="absolute -bottom-4 -left-6 bg-brand-green-dark border border-brand-lime/20 rounded px-3 py-2 shadow-lg">
        <p className="text-[10px] text-brand-white/60">PM notified</p>
        <p className="font-heading text-[11px] text-brand-white mt-0.5">hello@log-build.co.uk</p>
      </div>
    </div>
  );
}
