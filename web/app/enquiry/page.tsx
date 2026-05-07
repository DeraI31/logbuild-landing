import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — LogBuild",
  description:
    "Get in touch to see LogBuild in action. We'll show you how automated site reporting works for your projects.",
};

export default function EnquiryPage() {
  return (
    <>
      <Nav />
      <main className="min-h-[100dvh] bg-brand-white pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start pt-8">

            {/* Left: Context */}
            <div className="lg:sticky lg:top-28">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-green transition-colors duration-200 cursor-pointer mb-8"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to home
              </Link>

              <p className="font-heading text-xs text-brand-lime tracking-widest uppercase mb-4">
                Book a demo
              </p>
              <h1 className="font-heading text-3xl md:text-4xl text-brand-text tracking-tight leading-tight mb-6">
                See LogBuild in action on your projects.
              </h1>
              <p className="text-brand-text-muted leading-relaxed mb-8 max-w-[40ch]">
                Fill in the form and we&apos;ll get back to you within one
                business day to arrange a 30-minute walkthrough tailored to
                your team.
              </p>

              <div className="space-y-5 border-t border-brand-green/8 pt-8">
                {[
                  {
                    icon: <ClockIcon />,
                    title: "30-minute session",
                    desc: "Live demo using a real site report workflow",
                  },
                  {
                    icon: <TailoredIcon />,
                    title: "Tailored to your setup",
                    desc: "Google Workspace or Microsoft 365, your choice",
                  },
                  {
                    icon: <NoPressureIcon />,
                    title: "No commitment",
                    desc: "No contracts, no hard sell. Just a demo.",
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-brand-surface flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="font-heading text-sm text-brand-text tracking-tight">
                        {title}
                      </p>
                      <p className="text-sm text-brand-text-muted mt-0.5">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-brand-green/8">
                <p className="text-sm text-brand-text-muted">
                  Prefer email?{" "}
                  <a
                    href="mailto:hello@log-build.co.uk"
                    className="text-brand-green hover:text-brand-lime transition-colors duration-200 cursor-pointer font-medium"
                  >
                    hello@log-build.co.uk
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-brand-white border border-brand-green/8 rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(45,74,30,0.06)]">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TailoredIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function NoPressureIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7cb342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
