import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark border-t border-brand-lime/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/Logbuild_logo_transparent.png" alt="LogBuild" width={915} height={202} className="h-20 w-auto" />
            </Link>
            <p className="text-sm text-brand-white/40 max-w-[32ch] leading-relaxed">
              AI-powered site reporting for UK construction. No apps.
              No training. Just email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <p className="font-heading text-[10px] text-brand-lime/60 tracking-widest uppercase mb-3">
                Product
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Features", href: "/#features" },
                  { label: "Pricing", href: "/#pricing" },
                  { label: "Demo", href: "/#demo" },
                  { label: "Book a Demo", href: "/enquiry" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-brand-white/50 hover:text-brand-lime transition-colors duration-200 cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-heading text-[10px] text-brand-lime/60 tracking-widest uppercase mb-3">
                Company
              </p>
              <ul className="space-y-2">
                {[
                  { label: "hello@log-build.co.uk", href: "mailto:hello@log-build.co.uk" },
                  { label: "log-build.co.uk", href: "https://log-build.co.uk" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-brand-white/50 hover:text-brand-lime transition-colors duration-200 cursor-pointer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-heading text-[11px] text-brand-white/25 tracking-wider">
            &copy; 2026 LogBuild Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-heading text-[11px] text-brand-white/20 tracking-wider">Registered in England &amp; Wales</p>
            <p className="font-heading text-[11px] text-brand-white/20 tracking-wider">CDM 2015</p>
            <p className="font-heading text-[11px] text-brand-white/20 tracking-wider">GDPR</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
