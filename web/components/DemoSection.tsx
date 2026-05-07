"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function DemoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setPlaying(false);
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section id="demo" ref={sectionRef} className="bg-brand-green py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-12"
        >
          <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-3">
            See It Live
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-white tracking-tight">
            From email to report in 30 seconds.
          </h2>
          <p className="mt-4 text-brand-white/60 max-w-[46ch] mx-auto">
            Watch a real site update get converted into a professional PDF
            report with no formatting, no apps, no friction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-brand-lime/15"
        >
          <video
            ref={videoRef}
            src="/Final_demo.mp4"
            preload="metadata"
            playsInline
            controls={playing}
            className="w-full aspect-video bg-brand-green-dark block"
          />

          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-brand-green-dark/60 backdrop-blur-sm group cursor-pointer transition-colors duration-300 hover:bg-brand-green-dark/40"
              aria-label="Play demo video"
            >
              <div className="w-20 h-20 rounded-full bg-brand-lime flex items-center justify-center shadow-[0_8px_32px_rgba(124,179,66,0.4)] group-hover:scale-110 transition-transform duration-300">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#1e3213"
                  className="translate-x-0.5"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <p className="mt-4 font-heading text-xs text-brand-white/70 tracking-widest uppercase">
                Watch Demo
              </p>
            </button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 text-sm text-brand-white/40"
        >
          Real project data. Names changed for confidentiality.
        </motion.p>
      </div>
    </section>
  );
}
