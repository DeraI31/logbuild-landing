"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-brand-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="bg-brand-green rounded-2xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden shadow-[0_40px_120px_rgba(45,74,30,0.4)]"
        >
          {/* Ambient glow from top */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(124,179,66,0.18),transparent)] pointer-events-none" />
          {/* Top edge highlight */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-lime/40 to-transparent pointer-events-none" />
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #7cb342 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative">
            <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-4">
              Get started today
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-brand-white tracking-tight leading-tight mb-6 max-w-[24ch] mx-auto">
              Ready to automate your site admin?
            </h2>
            <p className="text-brand-white/60 max-w-[42ch] mx-auto mb-10 leading-relaxed">
              Book a 30-minute demo and see how LogBuild can save your site
              team hours every week starting next Monday.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="inline-flex items-center justify-center font-heading text-sm tracking-wider px-8 py-4 bg-brand-lime text-brand-green-dark font-bold rounded-lg hover:bg-brand-lime-hover transition-all duration-200 cursor-pointer active:scale-[0.98] shadow-[0_4px_28px_rgba(124,179,66,0.4)] hover:shadow-[0_8px_48px_rgba(124,179,66,0.6)]"
              >
                Book a Demo
              </Link>
              <a
                href="mailto:hello@log-build.co.uk"
                className="inline-flex items-center justify-center font-heading text-sm tracking-wider px-8 py-4 border border-brand-white/25 text-brand-white/80 rounded-lg hover:border-brand-white/50 hover:text-brand-white hover:bg-brand-white/5 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                Email us instead
              </a>
            </div>

            <p className="mt-8 text-xs text-brand-white/30 font-heading tracking-wider">
              No commitment. No sales pressure. Just a demo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
