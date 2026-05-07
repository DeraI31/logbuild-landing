import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LogBuild — AI-Powered Site Reports for UK Construction",
  description:
    "Automated daily site reports for construction managers. No apps, no training. AI formats your email updates into professional reports delivered in 30 seconds.",
  keywords: [
    "site reports",
    "construction AI",
    "UK construction",
    "site manager",
    "CDM",
    "BRE",
    "automated reports",
  ],
  openGraph: {
    title: "LogBuild — AI-Powered Site Reports for UK Construction",
    description:
      "Site reports, built automatically. No apps. No training. Just email.",
    url: "https://log-build.co.uk",
    siteName: "LogBuild",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${dmSans.variable}`}
    >
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
