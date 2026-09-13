import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = `${process.env.BASE_URL}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Lakshachandi Technology | Software Development Company",
    template: "%s | Lakshachandi Technology",
  },

  description:
    "Lakshachandi Technology provides custom software development, web development, backend APIs, mobile applications, cloud solutions and FinTech technology services.",

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
      name: "Lakshachandi Technology",
    },
  ],

  creator: "Lakshachandi Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Lakshachandi Technology | Software Development Company",
    description:
      "Custom software development, backend engineering, web applications, mobile apps and cloud solutions.",
    siteName: "Lakshachandi Technology",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lakshachandi Technology - Software Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lakshachandi Technology | Software Development Company",
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
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Lakshachandi-Technology"
        />
      </head>
      <body>
        {children} <GoogleAnalytics />
      </body>
    </html>
  );
}
