import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = "https://www.yourcompany.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "LakshChandi Technology | Software Development Company",
    template: "%s | LakshChandi Technology",
  },

  description:
    "LakshChandi Technology provides custom software development, web development, backend APIs, mobile applications, cloud solutions and FinTech technology services.",

  keywords: [
    "software development company",
    "software development company Mumbai",
    "web development company Mumbai",
    "backend development company",
    "Node.js development company",
    "Next.js development company",
    "mobile app development",
    "API development",
    "AWS development",
    "FinTech software development",
    "payment software development",
    "custom software development",
  ],

  authors: [
    {
      name: "LakshChandi Technology",
    },
  ],

  creator: "LakshChandi Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "LakshChandi Technology | Software Development Company",
    description:
      "Custom software development, backend engineering, web applications, mobile apps and cloud solutions.",
    siteName: "LakshChandi Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LakshChandi Technology - Software Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LakshChandi Technology | Software Development Company",
    description:
      "Custom software development, backend engineering, web applications and cloud solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>{children} <GoogleAnalytics/></body>
    </html>
  );
}